/**
 * @author mad@Max
 */
(function () {

	var Y = YAHOO.util, D = Y.Dom, A = Y.Anim, L = YAHOO.lang,

	vis = function (el, speed, eff, dir) {

		el = (L.isString(el) ? D.get(el) : el);
		var h1 = {to: 0}, h2 = {to: 0}, fn = eff + "In", hi = function(){return parseInt(D.getComputedStyle(el, "height"));}, h = hi();
		if (!h) 
		{
			var old = el.style.cssText;
			el.style.cssText = "position:absolute;visibility:hidden;display:block";
			h1.to = hi();
			h2.to = 1;
			with(el.style)
			{
				cssText = old;
				opacity = 0
				height = 0;
				display = "block";
			}
			fn = eff + "Out";
		}

		var fns = [new A(el, {height: h1}, speed, Y.Easing[fn]), h, new A(el, {opacity: h2}, speed)];
		if ((dir == 'toggle' || dir == 'hide') && h)
		{
			fns.reverse();
		}
		return fns;

	};

	YAHOO.lang.augmentObject(A, {

		sh: function (el, dir, speed, eff, callback) {
			var p = vis(el, speed, (L.isUndefined(eff) ? "ease" : eff), (L.isUndefined(dir) ? "toggle" : dir)), f1 = p[0], f2 = p[2];
			
			f1.onComplete.subscribe(function(){
				f2.onComplete.subscribe(function(){
					if (p[1]){el.style.display = "none"};
					el.style.opacity = "";
					el.style.height = "";
					if (L.isFunction(callback)){callback();}
				});
				f2.animate();
			});
			f1.animate();

		}
		
	});

}());
YAHOO.register("animation-sh", YAHOO.util.Anim, {version: "2.8.1", build: "19"});