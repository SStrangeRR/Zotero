!function(t,e){var i=function(t,e){"use strict";if(!e.getElementsByClassName)return;var i,n,a=e.documentElement,r=t.Date,s=t.HTMLPictureElement,o=t.addEventListener,l=t.setTimeout,d=t.requestAnimationFrame||l,c=t.requestIdleCallback,u=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],m={},g=Array.prototype.forEach,z=function(t,e){return m[e]||(m[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),m[e].test(t.getAttribute("class")||"")&&m[e]},v=function(t,e){z(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},y=function(t,e){var i;(i=z(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(i," "))},h=function(t,e,i){var n=i?"addEventListener":"removeEventListener";i&&h(t,e),f.forEach(function(i){t[n](i,e)})},b=function(t,n,a,r,s){var o=e.createEvent("Event");return a||(a={}),a.instance=i,o.initEvent(n,!r,!s),o.detail=a,t.dispatchEvent(o),o},p=function(e,i){var a;!s&&(a=t.picturefill||n.pf)?(i&&i.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",i.src),a({reevaluate:!0,elements:[e]})):i&&i.src&&(e.src=i.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,i){for(i=i||t.offsetWidth;i<n.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},E=(L=[],x=[],W=L,T=function(){var t=W;for(W=L.length?x:L,M=!0,N=!1;t.length;)t.shift()();M=!1},B=function(t,i){M&&!i?t.apply(this,arguments):(W.push(t),N||(N=!0,(e.hidden?l:d)(T)))},B._lsFlush=T,B),_=function(t,e){return e?function(){E(t)}:function(){var e=this,i=arguments;E(function(){t.apply(e,i)})}},w=function(t){var e,i,n=function(){e=null,t()},a=function(){var t=r.now()-i;t<99?l(a,99-t):(c||n)(n)};return function(){i=r.now(),e||(e=l(a,99))}};var M,N,L,x,W,T,B;!function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in n=t.lazySizesConfig||t.lazysizesConfig||{},i)e in n||(n[e]=i[e]);t.lazySizesConfig=n,l(function(){n.init&&R()})}();var F=function(){var s,d,f,m,C,M,N,L,x,W,T,B,F,R,k,D,H,O,P,$=/^img$/i,I=/^iframe$/i,q="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),j=0,G=0,J=-1,K=function(t){G--,(!t||G<0||!t.target)&&(G=0)},Q=function(t){return null==B&&(B="hidden"==A(e.body,"visibility")),B||"hidden"!=A(t.parentNode,"visibility")&&"hidden"!=A(t,"visibility")},U=function(t,i){var n,r=t,s=Q(t);for(L-=i,T+=i,x-=i,W+=i;s&&(r=r.offsetParent)&&r!=e.body&&r!=a;)(s=(A(r,"opacity")||1)>0)&&"visible"!=A(r,"overflow")&&(n=r.getBoundingClientRect(),s=W>n.left&&x<n.right&&T>n.top-1&&L<n.bottom+1);return s},V=function(){var t,r,o,l,c,u,f,g,z,v,y,h,b=i.elements;if((m=n.loadMode)&&G<8&&(t=b.length)){for(r=0,J++,v=!n.expand||n.expand<1?a.clientHeight>500&&a.clientWidth>500?500:370:n.expand,i._defEx=v,y=v*n.expFactor,h=n.hFac,B=null,j<y&&G<1&&J>2&&m>2&&!e.hidden?(j=y,J=0):j=m>1&&J>1&&G<6?v:0;r<t;r++)if(b[r]&&!b[r]._lazyRace)if(q)if((g=b[r].getAttribute("data-expand"))&&(u=1*g)||(u=j),z!==u&&(M=innerWidth+u*h,N=innerHeight+u,f=-1*u,z=u),o=b[r].getBoundingClientRect(),(T=o.bottom)>=f&&(L=o.top)<=N&&(W=o.right)>=f*h&&(x=o.left)<=M&&(T||W||x||L)&&(n.loadHidden||Q(b[r]))&&(d&&G<3&&!g&&(m<3||J<4)||U(b[r],u))){if(nt(b[r]),c=!0,G>9)break}else!c&&d&&!l&&G<4&&J<4&&m>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!g&&(T||W||x||L||"auto"!=b[r].getAttribute(n.sizesAttr)))&&(l=s[0]||b[r]);else nt(b[r]);l&&!c&&nt(l)}},X=(F=V,k=0,D=n.throttleDelay,H=n.ricTimeout,O=function(){R=!1,k=r.now(),F()},P=c&&H>49?function(){c(O,{timeout:H}),H!==n.ricTimeout&&(H=n.ricTimeout)}:_(function(){l(O)},!0),function(t){var e;(t=!0===t)&&(H=33),R||(R=!0,(e=D-(r.now()-k))<0&&(e=0),t||e<9?P():l(P,e))}),Y=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(K(t),v(e,n.loadedClass),y(e,n.loadingClass),h(e,tt),b(e,"lazyloaded"))},Z=_(Y),tt=function(t){Z({target:t.target})},et=function(t){var e,i=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},it=_(function(t,e,i,a,r){var s,o,d,c,m,z;(m=b(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(i?v(t,n.autosizesClass):t.setAttribute("sizes",a)),o=t.getAttribute(n.srcsetAttr),s=t.getAttribute(n.srcAttr),r&&(d=t.parentNode,c=d&&u.test(d.nodeName||"")),z=e.firesLoad||"src"in t&&(o||s||c),m={target:t},v(t,n.loadingClass),z&&(clearTimeout(f),f=l(K,2500),h(t,tt,!0)),c&&g.call(d.getElementsByTagName("source"),et),o?t.setAttribute("srcset",o):s&&!c&&(I.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}}(t,s):t.src=s),r&&(o||c)&&p(t,{src:s})),t._lazyRace&&delete t._lazyRace,y(t,n.lazyClass),E(function(){var e=t.complete&&t.naturalWidth>1;z&&!e||(e&&v(t,"ls-is-cached"),Y(m),t._lazyCache=!0,l(function(){"_lazyCache"in t&&delete t._lazyCache},9))},!0)}),nt=function(t){var e,i=$.test(t.nodeName),a=i&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),r="auto"==a;(!r&&d||!i||!t.getAttribute("src")&&!t.srcset||t.complete||z(t,n.errorClass)||!z(t,n.lazyClass))&&(e=b(t,"lazyunveilread").detail,r&&S.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,G++,it(t,e,r,a,i))},at=function(){if(!d)if(r.now()-C<999)l(at,999);else{var t=w(function(){n.loadMode=3,X()});d=!0,n.loadMode=3,X(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),t()},!0)}};return{_:function(){C=r.now(),i.elements=e.getElementsByClassName(n.lazyClass),s=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),o("scroll",X,!0),o("resize",X,!0),t.MutationObserver?new MutationObserver(X).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a.addEventListener("DOMNodeInserted",X,!0),a.addEventListener("DOMAttrModified",X,!0),setInterval(X,999)),o("hashchange",X,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,X,!0)}),/d$|^c/.test(e.readyState)?at():(o("load",at),e.addEventListener("DOMContentLoaded",X),l(at,2e4)),i.elements.length?(V(),E._lsFlush()):X()},checkElems:X,unveil:nt}}(),S=(D=_(function(t,e,i,n){var a,r,s;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),u.test(e.nodeName||""))for(a=e.getElementsByTagName("source"),r=0,s=a.length;r<s;r++)a[r].setAttribute("sizes",n);i.detail.dataAttr||p(t,i.detail)}),H=function(t,e,i){var n,a=t.parentNode;a&&(i=C(t,a,i),(n=b(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=n.detail.width)&&i!==t._lazysizesWidth&&D(t,a,n,i))},O=w(function(){var t,e=k.length;if(e)for(t=0;t<e;t++)H(k[t])}),{_:function(){k=e.getElementsByClassName(n.autosizesClass),o("resize",O)},checkElems:O,updateElem:H}),R=function(){R.i||(R.i=!0,S._(),F._())};var k,D,H,O;return i={cfg:n,autoSizer:S,loader:F,init:R,uP:p,aC:v,rC:y,hC:z,fire:b,gW:C,rAF:E}}(t,t.document);t.lazySizes=i,"object"==typeof module&&module.exports&&(module.exports=i)}(window);
