D3Stencil.loadBundle("chunk-f7062f5a.js",["exports"],function(t){function n(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function e(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function r(){}window;var i="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",o="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",u=/^#([0-9a-f]{3})$/,s=/^#([0-9a-f]{6})$/,l=new RegExp("^rgb\\("+[i,i,i]+"\\)$"),h=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),c=new RegExp("^rgba\\("+[i,i,i,a]+"\\)$"),f=new RegExp("^rgba\\("+[o,o,o,a]+"\\)$"),g=new RegExp("^hsl\\("+[a,o,o]+"\\)$"),p=new RegExp("^hsla\\("+[a,o,o,a]+"\\)$"),d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function w(t){var n;return t=(t+"").trim().toLowerCase(),(n=u.exec(t))?new M((n=parseInt(n[1],16))>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):(n=s.exec(t))?b(parseInt(n[1],16)):(n=l.exec(t))?new M(n[1],n[2],n[3],1):(n=h.exec(t))?new M(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=c.exec(t))?y(n[1],n[2],n[3],n[4]):(n=f.exec(t))?y(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=g.exec(t))?N(n[1],n[2]/100,n[3]/100,1):(n=p.exec(t))?N(n[1],n[2]/100,n[3]/100,n[4]):d.hasOwnProperty(t)?b(d[t]):"transparent"===t?new M(NaN,NaN,NaN,0):null}function b(t){return new M(t>>16&255,t>>8&255,255&t,1)}function y(t,n,e,r){return r<=0&&(t=n=e=NaN),new M(t,n,e,r)}function m(t){return t instanceof r||(t=w(t)),t?new M((t=t.rgb()).r,t.g,t.b,t.opacity):new M}function v(t,n,e,r){return 1===arguments.length?m(t):new M(t,n,e,null==r?1:r)}function M(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function k(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function N(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new x(t,n,e,r)}function x(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function X(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}n(r,w,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),n(M,v,e(r,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+k(this.r)+k(this.g)+k(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),n(x,function(t,n,e,i){return 1===arguments.length?function(t){if(t instanceof x)return new x(t.h,t.s,t.l,t.opacity);if(t instanceof r||(t=w(t)),!t)return new x;if(t instanceof x)return t;var n=(t=t.rgb()).r/255,e=t.g/255,i=t.b/255,a=Math.min(n,e,i),o=Math.max(n,e,i),u=NaN,s=o-a,l=(o+a)/2;return s?(u=n===o?(e-i)/s+6*(e<i):e===o?(i-n)/s+2:(n-e)/s+4,s/=l<.5?o+a:2-o-a,u*=60):s=l>0&&l<1?0:u,new x(u,s,l,t.opacity)}(t):new x(t,n,e,null==i?1:i)},e(r,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new x(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new x(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new M(X(t>=240?t-240:t+120,i,r),X(t,i,r),X(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var q=Math.PI/180,E=180/Math.PI,I=.96422,R=1,S=.82521,Y=4/29,$=6/29,j=3*$*$,A=$*$*$;function C(t){if(t instanceof P)return new P(t.l,t.a,t.b,t.opacity);if(t instanceof z){if(isNaN(t.h))return new P(t.l,0,0,t.opacity);var n=t.h*q;return new P(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof M||(t=m(t));var e,r,i=T(t.r),a=T(t.g),o=T(t.b),u=D((.2225045*i+.7168786*a+.0606169*o)/R);return i===a&&a===o?e=r=u:(e=D((.4360747*i+.3850649*a+.1430804*o)/I),r=D((.0139322*i+.0971045*a+.7141733*o)/S)),new P(116*u-16,500*(e-u),200*(u-r),t.opacity)}function P(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function D(t){return t>A?Math.pow(t,1/3):t/j+Y}function V(t){return t>$?t*t*t:j*(t-Y)}function O(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function T(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function z(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}n(P,function(t,n,e,r){return 1===arguments.length?C(t):new P(t,n,e,null==r?1:r)},e(r,{brighter:function(t){return new P(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new P(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new M(O(3.1338561*(n=I*V(n))-1.6168667*(t=R*V(t))-.4906146*(e=S*V(e))),O(-.9787684*n+1.9161415*t+.033454*e),O(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),n(z,function(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof z)return new z(t.h,t.c,t.l,t.opacity);if(t instanceof P||(t=C(t)),0===t.a&&0===t.b)return new z(NaN,0,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*E;return new z(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new z(t,n,e,null==r?1:r)},e(r,{brighter:function(t){return new z(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new z(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return C(this).rgb()}}));var B=-.14861,L=1.78277,F=-.29227,G=-.90649,H=1.97294,J=H*G,K=H*L,Q=L*F-G*B;function U(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function W(t){return function(){return t}}function Z(t,n){var e=n-t;return e?function(t,n){return function(e){return t+e*n}}(t,e):W(isNaN(t)?n:t)}n(U,function(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof U)return new U(t.h,t.s,t.l,t.opacity);t instanceof M||(t=m(t));var n=t.g/255,e=t.b/255,r=(Q*e+J*(t.r/255)-K*n)/(Q+J-K),i=e-r,a=(H*(n-r)-F*i)/G,o=Math.sqrt(a*a+i*i)/(H*r*(1-r)),u=o?Math.atan2(a,i)*E-120:NaN;return new U(u<0?u+360:u,o,r,t.opacity)}(t):new U(t,n,e,null==r?1:r)},e(r,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new U(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new U(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*q,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new M(255*(n+e*(B*r+L*i)),255*(n+e*(F*r+G*i)),255*(n+e*(H*r)),this.opacity)}}));var _=function t(n){var e=function(t){return 1==(t=+t)?Z:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):W(isNaN(n)?e:n)}}(n);function r(t,n){var r=e((t=v(t)).r,(n=v(n)).r),i=e(t.g,n.g),a=e(t.b,n.b),o=Z(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=a(n),t.opacity=o(n),t+""}}return r.gamma=t,r}(1);function tt(t,n){return n-=t=+t,function(e){return t+n*e}}var nt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,et=new RegExp(nt.source,"g");function rt(t,n){var e,r,i,a=nt.lastIndex=et.lastIndex=0,o=-1,u=[],s=[];for(t+="",n+="";(e=nt.exec(t))&&(r=et.exec(n));)(i=r.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(e=e[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,s.push({i:o,x:tt(e,r)})),a=et.lastIndex;return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t);return u.join("")})}var it,at,ot,ut,st=180/Math.PI,lt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ht(t,n,e,r,i,a){var o,u,s;return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(n,t)*st,skewX:Math.atan(s)*st,scaleX:o,scaleY:u}}function ct(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(a,o){var u=[],s=[];return a=t(a),o=t(o),function(t,r,i,a,o,u){if(t!==i||r!==a){var s=o.push("translate(",null,n,null,e);u.push({i:s-4,x:tt(t,i)},{i:s-2,x:tt(r,a)})}else(i||a)&&o.push("translate("+i+n+a+e)}(a.translateX,a.translateY,o.translateX,o.translateY,u,s),function(t,n,e,a){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),a.push({i:e.push(i(e)+"rotate(",null,r)-2,x:tt(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(a.rotate,o.rotate,u,s),function(t,n,e,a){t!==n?a.push({i:e.push(i(e)+"skewX(",null,r)-2,x:tt(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(a.skewX,o.skewX,u,s),function(t,n,e,r,a,o){if(t!==e||n!==r){var u=a.push(i(a)+"scale(",null,",",null,")");o.push({i:u-4,x:tt(t,e)},{i:u-2,x:tt(n,r)})}else 1===e&&1===r||a.push(i(a)+"scale("+e+","+r+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,u,s),a=o=null,function(t){for(var n,e=-1,r=s.length;++e<r;)u[(n=s[e]).i]=n.x(t);return u.join("")}}}var ft=ct(function(t){return"none"===t?lt:(it||(it=document.createElement("DIV"),at=document.documentElement,ot=document.defaultView),it.style.transform=t,t=ot.getComputedStyle(at.appendChild(it),null).getPropertyValue("transform"),at.removeChild(it),ht(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),gt=ct(function(t){return null==t?lt:(ut||(ut=document.createElementNS("http://www.w3.org/2000/svg","g")),ut.setAttribute("transform",t),(t=ut.transform.baseVal.consolidate())?ht((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):lt)},", ",")",")");Math,t.number=tt,t.interpolateRound=function(t,n){return n-=t=+t,function(e){return Math.round(t+n*e)}},t.value=function t(n,e){var r,i=typeof e;return null==e||"boolean"===i?W(e):("number"===i?tt:"string"===i?(r=w(e))?(e=r,_):rt:e instanceof w?_:e instanceof Date?function(t,n){var e=new Date;return n-=t=+t,function(r){return e.setTime(t+n*r),e}}:Array.isArray(e)?function(n,e){var r,i=e?e.length:0,a=n?Math.min(i,n.length):0,o=new Array(a),u=new Array(i);for(r=0;r<a;++r)o[r]=t(n[r],e[r]);for(;r<i;++r)u[r]=e[r];return function(t){for(r=0;r<a;++r)u[r]=o[r](t);return u}}:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?function(n,e){var r,i={},a={};for(r in null!==n&&"object"==typeof n||(n={}),null!==e&&"object"==typeof e||(e={}),e)r in n?i[r]=t(n[r],e[r]):a[r]=e[r];return function(t){for(r in i)a[r]=i[r](t);return a}}:tt)(n,e)},t.color=w,t.rgb=_,t.string=rt,t.interpolateTransformSvg=gt,t.interpolateTransformCss=ft});