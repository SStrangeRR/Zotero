(function(a,e,t,i,n,r,o){if(e.__no_sec_entry){return}var c=i.userAgent;var l=o("%58%75%65%58%69");var s=l.toLowerCase();if(c.indexOf(l)>=0||n.host.indexOf(s)>=0||top!==self&&e.referrer.indexOf(s)>=0){return}var f=e.getElementsByTagName("head")[0];function d(a){var t=e.createElement("script");t.src=a;return f.appendChild(t)}var v="//g.alicdn.com";var m=self.goldlog;if(m&&m.getCdnPath){v=m.getCdnPath()}v+="/secdev/";var u=c.match(/Chrome\/(\d*)/);if(u){u=+u[1]}if(!e._sufei_data2){var g="3.8.3";var h=d(v+"sufei_data/"+g+"/index.js");h.async=e.cookie.indexOf("isg=")<0;h.id="aplus-sufei"}var p=.001;if(t()<p){e._linkstat_sample=p;d(v+"linkstat/index.js?v=1201")}a.nsrprtrt=1e-4;var y=0;if(!/Mobile/.test(c)){var b=["taobao.com","alibaba.com","alipay.com","tmall.com","lazada","aliexpress.com","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz.lk","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode.cn","mp.dfkhgj.com","mp.bcvbw.com","m.dfkhgj.com"];for(var x=0;x<b.length;x++){if(n.host&&~n.host.indexOf(b[x])){y=1;break}}}if(y){var _=["1.0.64","c",75];var k=["1.0.71","d",82];var E=10;var j=_;if((t()*1e4|0)<E){j=k}if(!j){return}var C=v+"nsv/"+j[0]+"/";var M=C+"ns_"+j[1]+"_"+j[2]+"_3_f.js";var L=C+"ns_"+j[1]+"_"+j[2]+"_3_n.js";function w(){var a="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";if("WebkitAppearance"in e.documentElement.style){if(escape(i.javaEnabled.toString())===a){return true}}return false}var I=c.match(/Edge\/([\d]*)/);var S=c.match(/Safari\/([\d]*)/);var B=c.match(/Firefox\/([\d]*)/);var O=c.match(/MSIE|Trident/);if(I){d(M)}else if(u){d(M)}else if(S||B||O){d(L)}else{if(w()){d(M)}else{d(L)}}}function A(){var t=a.atob;if(!t){return}function i(a,e){var t=[];for(var i in a){t.push(i+"="+r(a[i]))}(new Image).src=e+t.join("&")}var n=0;var o="";function c(){if(++n==3){clearInterval(u)}f()}var l;var s=Math.random()*1e8|0;function f(){var a=l.getUA({MaxMTLog:500,MTInterval:7});a=s+"|"+a;var e={token:a,cna:o,ext:7};i(e,"https://fourier.taobao.com/ts?")}var v=+localStorage._xlly;if(!v&&/xlly=1/.test(e.cookie)){v=+new Date;localStorage._xlly=v}if(v){var m=new Date-v;if(m>1e3*3600*24){m=0;delete localStorage._xlly}if(m<1e3*60*20){var u=setInterval(c,1e3*60);if(a.addEventListener){a.addEventListener("unload",f)}var g=e.cookie.match(/cna=([^;]+)/);if(g){o=g[1]}var h=d(t("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));var p=unescape("%75%61%62");h.onload=function(){a.AWSC&&AWSC.use(p,function(a,e){if(a==="loaded"){l=e}})}}}}try{A()}catch(a){}a.addEventListener&&a.addEventListener("message",function(t){try{if(t.data&&t.data.indexOf("tmp-bbx-")>-1){var i=e.getElementsByClassName("sufei-dialog")[0];var n=e.getElementsByClassName("baxia-dialog")[0];var r="";if(i&&i.style.display==="block"){r="sf-v-"+(a.sufei&&sufei.version)}else if(n&&n.style.display==="block"){r="bx"}else{r="undefined"}D(t.data+"|"+r)}}catch(a){}});function D(a){(new Image).src="https://fourier.alibaba.com/ts?ext=11&token="+r(a)}})(window,document,Math.random,navigator,location,encodeURIComponent,decodeURIComponent);