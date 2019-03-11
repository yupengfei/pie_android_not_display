function t(t){return null===t?"null":void 0===t?"undefined":"object"==typeof t?Array.isArray(t)?"array":"object":typeof t}function n(n){return"object"===t(n)?r(n):"array"===t(n)?e(n):n}function e(t){return t.map(n)}function r(t){const e={};for(const r in t)t.hasOwnProperty(r)&&(e[r]=n(t[r]));return e}function i(n,u=[],o={}){const a={arrayBehaviour:o.arrayBehaviour||"replace"},c=u.map(t=>t||{}),s=n||{};for(let n=0;n<c.length;n++){const u=c[n],o=Object.keys(u);for(let n=0;n<o.length;n++){const c=o[n],l=u[c],f=t(l),g=t(s[c]);if("object"===f)s[c]="undefined"!==g?i({},["object"===g?s[c]:{},r(l)],a):r(l);else if("array"===f)if("array"===g){const t=e(l);s[c]="merge"===a.arrayBehaviour?s[c].concat(t):t}else s[c]=e(l);else s[c]=l}}return s}window;var u=function(t,...n){return i(t,n)};function o(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function a(t){return(t=o(Math.abs(t)))?t[1]:NaN}u.noMutate=function(...t){return i({},t)},u.withOptions=function(t,n,e){return i(t,n,e)};var c,s=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function l(t){return new f(t)}function f(t){if(!(n=s.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||""}function g(t,n){var e=o(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}l.prototype=f.prototype,f.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var h={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return g(100*t,n)},r:g,s:function(t,n){var e=o(t,n);if(!e)return t+"";var r=e[0],i=e[1],u=i-(c=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return u===a?r:u>a?r+new Array(u-a+1).join("0"):u>0?r.slice(0,u)+"."+r.slice(u):"0."+new Array(1-u).join("0")+o(t,Math.max(0,n+u-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function m(t){return t}var y,d,M,T=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function v(t){return Math.max(0,-a(Math.abs(t)))}function C(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(a(n)/3)))-a(Math.abs(t)))}function U(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,a(n)-a(t))+1}y=function(t){var n,e,r=t.grouping&&t.thousands?(n=t.grouping,e=t.thousands,function(t,r){for(var i=t.length,u=[],o=0,a=n[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),u.push(t.substring(i-=a,i+a)),!((c+=a+1)>r));)a=n[o=(o+1)%n.length];return u.reverse().join(e)}):m,i=t.currency,u=t.decimal,o=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):m,s=t.percent||"%";function f(t){var n=(t=l(t)).fill,e=t.align,a=t.sign,f=t.symbol,g=t.zero,m=t.width,y=t.comma,d=t.precision,M=t.trim,v=t.type;"n"===v?(y=!0,v="g"):h[v]||(null==d&&(d=12),M=!0,v="g"),(g||"0"===n&&"="===e)&&(g=!0,n="0",e="=");var C="$"===f?i[0]:"#"===f&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",U="$"===f?i[1]:/[%p]/.test(v)?s:"",p=h[v],D=/[defgprs%]/.test(v);function b(t){var i,s,l,f=C,h=U;if("c"===v)h=p(t)+h,t="";else{var b=(t=+t)<0;if(t=p(Math.abs(t),d),M&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(i>0){if(!+t[r])break t;i=0}}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),b&&0==+t&&(b=!1),f=(b?"("===a?a:"-":"-"===a||"("===a?"":a)+f,h=("s"===v?T[8+c/3]:"")+h+(b&&"("===a?")":""),D)for(i=-1,s=t.length;++i<s;)if(48>(l=t.charCodeAt(i))||l>57){h=(46===l?u+t.slice(i+1):t.slice(i))+h,t=t.slice(0,i);break}}y&&!g&&(t=r(t,1/0));var w=f.length+t.length+h.length,x=w<m?new Array(m-w+1).join(n):"";switch(y&&g&&(t=r(x+t,x.length?m-h.length:1/0),x=""),e){case"<":t=f+t+h+x;break;case"=":t=f+x+t+h;break;case"^":t=x.slice(0,w=x.length>>1)+f+t+h+x.slice(w);break;default:t=x+f+t+h}return o(t)}return d=null==d?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d)),b.toString=function(){return t+""},b}return{format:f,formatPrefix:function(t,n){var e=f(((t=l(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(a(n)/3))),i=Math.pow(10,-r),u=T[8+r/3];return function(t){return e(i*t)+u}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),d=y.format,M=y.formatPrefix;var p=new Date,D=new Date;function b(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,u){var o,a=[];if(e=i.ceil(e),u=null==u?1:Math.floor(u),!(e<r&&u>0))return a;do{a.push(o=new Date(+e)),n(e,u),t(e)}while(o<e&&e<r);return a},i.filter=function(e){return b(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return p.setTime(+n),D.setTime(+r),t(p),t(D),Math.floor(e(p,D))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var w=b(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});w.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?b(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):w:null};var x=6e4,Y=6048e5,S=(b(function(t){t.setTime(t-t.getMilliseconds())},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),b(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds())},function(t,n){t.setTime(+t+n*x)},function(t,n){return(n-t)/x},function(t){return t.getMinutes()}),b(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds()-t.getMinutes()*x)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),b(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*x)/864e5},function(t){return t.getDate()-1}));function A(t){return b(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*x)/Y})}var F=A(0),H=A(1),E=(A(2),A(3),A(4)),N=(A(5),A(6),b(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),b(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()}));N.every=function(t){return isFinite(t=Math.floor(t))&&t>0?b(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null},b(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*x)},function(t,n){return(n-t)/x},function(t){return t.getUTCMinutes()}),b(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()});var O=b(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1});function j(t){return b(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/Y})}var L=j(0),R=j(1),V=(j(2),j(3),j(4)),P=(j(5),j(6),b(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),b(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()}));function Z(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function k(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function W(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}P.every=function(t){return isFinite(t=Math.floor(t))&&t>0?b(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var _,z,B,I,$={"-":"",_:" ",0:"0"},G=/^\s*\d+/,X=/^%/,Q=/[\\^$*+?|[\]().{}]/g;function J(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",u=i.length;return r+(u<e?new Array(e-u+1).join(n)+i:i)}function q(t){return t.replace(Q,"\\$&")}function K(t){return new RegExp("^(?:"+t.map(q).join("|")+")","i")}function tt(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function nt(t,n,e){var r=G.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function et(t,n,e){var r=G.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function rt(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function it(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function ut(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function ot(t,n,e){var r=G.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function at(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function ct(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function st(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function lt(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function ft(t,n,e){var r=G.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function gt(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function ht(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function mt(t,n,e){var r=G.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function yt(t,n,e){var r=G.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function dt(t,n,e){var r=G.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Mt(t,n,e){var r=X.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function Tt(t,n,e){var r=G.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function vt(t,n,e){var r=G.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function Ct(t,n){return J(t.getDate(),n,2)}function Ut(t,n){return J(t.getHours(),n,2)}function pt(t,n){return J(t.getHours()%12||12,n,2)}function Dt(t,n){return J(1+S.count(N(t),t),n,3)}function bt(t,n){return J(t.getMilliseconds(),n,3)}function wt(t,n){return bt(t,n)+"000"}function xt(t,n){return J(t.getMonth()+1,n,2)}function Yt(t,n){return J(t.getMinutes(),n,2)}function St(t,n){return J(t.getSeconds(),n,2)}function At(t){var n=t.getDay();return 0===n?7:n}function Ft(t,n){return J(F.count(N(t),t),n,2)}function Ht(t,n){var e=t.getDay();return t=e>=4||0===e?E(t):E.ceil(t),J(E.count(N(t),t)+(4===N(t).getDay()),n,2)}function Et(t){return t.getDay()}function Nt(t,n){return J(H.count(N(t),t),n,2)}function Ot(t,n){return J(t.getFullYear()%100,n,2)}function jt(t,n){return J(t.getFullYear()%1e4,n,4)}function Lt(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+J(n/60|0,"0",2)+J(n%60,"0",2)}function Rt(t,n){return J(t.getUTCDate(),n,2)}function Vt(t,n){return J(t.getUTCHours(),n,2)}function Pt(t,n){return J(t.getUTCHours()%12||12,n,2)}function Zt(t,n){return J(1+O.count(P(t),t),n,3)}function kt(t,n){return J(t.getUTCMilliseconds(),n,3)}function Wt(t,n){return kt(t,n)+"000"}function _t(t,n){return J(t.getUTCMonth()+1,n,2)}function zt(t,n){return J(t.getUTCMinutes(),n,2)}function Bt(t,n){return J(t.getUTCSeconds(),n,2)}function It(t){var n=t.getUTCDay();return 0===n?7:n}function $t(t,n){return J(L.count(P(t),t),n,2)}function Gt(t,n){var e=t.getUTCDay();return t=e>=4||0===e?V(t):V.ceil(t),J(V.count(P(t),t)+(4===P(t).getUTCDay()),n,2)}function Xt(t){return t.getUTCDay()}function Qt(t,n){return J(R.count(P(t),t),n,2)}function Jt(t,n){return J(t.getUTCFullYear()%100,n,2)}function qt(t,n){return J(t.getUTCFullYear()%1e4,n,4)}function Kt(){return"+0000"}function tn(){return"%"}function nn(t){return+t}function en(t){return Math.floor(+t/1e3)}!function(t){_=function(n){var e=t.dateTime,r=t.date,i=t.time,u=t.periods,o=t.days,a=t.shortDays,c=t.months,s=t.shortMonths,l=K(u),f=tt(u),g=K(o),h=tt(o),m=K(a),y=tt(a),d=K(c),M=tt(c),T=K(s),v=tt(s),C={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return s[t.getMonth()]},B:function(t){return c[t.getMonth()]},c:null,d:Ct,e:Ct,f:wt,H:Ut,I:pt,j:Dt,L:bt,m:xt,M:Yt,p:function(t){return u[+(t.getHours()>=12)]},Q:nn,s:en,S:St,u:At,U:Ft,V:Ht,w:Et,W:Nt,x:null,X:null,y:Ot,Y:jt,Z:Lt,"%":tn},U={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return s[t.getUTCMonth()]},B:function(t){return c[t.getUTCMonth()]},c:null,d:Rt,e:Rt,f:Wt,H:Vt,I:Pt,j:Zt,L:kt,m:_t,M:zt,p:function(t){return u[+(t.getUTCHours()>=12)]},Q:nn,s:en,S:Bt,u:It,U:$t,V:Gt,w:Xt,W:Qt,x:null,X:null,y:Jt,Y:qt,Z:Kt,"%":tn},p={a:function(t,n,e){var r=m.exec(n.slice(e));return r?(t.w=y[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=T.exec(n.slice(e));return r?(t.m=v[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.m=M[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,n,r){return w(t,e,n,r)},d:lt,e:lt,f:dt,H:gt,I:gt,j:ft,L:yt,m:st,M:ht,p:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.p=f[r[0].toLowerCase()],e+r[0].length):-1},Q:Tt,s:vt,S:mt,u:et,U:rt,V:it,w:nt,W:ut,x:function(t,n,e){return w(t,r,n,e)},X:function(t,n,e){return w(t,i,n,e)},y:at,Y:ot,Z:ct,"%":Mt};function D(t,n){return function(e){var r,i,u,o=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(o.push(t.slice(c,a)),null!=(i=$[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(u=n[r])&&(r=u(e,i)),o.push(r),c=a+1);return o.push(t.slice(c,a)),o.join("")}}function b(t,n){return function(e){var r,i,u=W(1900);if(w(u,t,e+="",0)!=e.length)return null;if("Q"in u)return new Date(u.Q);if("p"in u&&(u.H=u.H%12+12*u.p),"V"in u){if(u.V<1||u.V>53)return null;"w"in u||(u.w=1),"Z"in u?(i=(r=k(W(u.y))).getUTCDay(),r=i>4||0===i?R.ceil(r):R(r),r=O.offset(r,7*(u.V-1)),u.y=r.getUTCFullYear(),u.m=r.getUTCMonth(),u.d=r.getUTCDate()+(u.w+6)%7):(i=(r=n(W(u.y))).getDay(),r=i>4||0===i?H.ceil(r):H(r),r=S.offset(r,7*(u.V-1)),u.y=r.getFullYear(),u.m=r.getMonth(),u.d=r.getDate()+(u.w+6)%7)}else("W"in u||"U"in u)&&("w"in u||(u.w="u"in u?u.u%7:"W"in u?1:0),i="Z"in u?k(W(u.y)).getUTCDay():n(W(u.y)).getDay(),u.m=0,u.d="W"in u?(u.w+6)%7+7*u.W-(i+5)%7:u.w+7*u.U-(i+6)%7);return"Z"in u?(u.H+=u.Z/100|0,u.M+=u.Z%100,k(u)):n(u)}}function w(t,n,e,r){for(var i,u,o=0,a=n.length,c=e.length;o<a;){if(r>=c)return-1;if(37===(i=n.charCodeAt(o++))){if(i=n.charAt(o++),!(u=p[i in $?n.charAt(o++):i])||(r=u(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return C.x=D(r,C),C.X=D(i,C),C.c=D(e,C),U.x=D(r,U),U.X=D(i,U),U.c=D(e,U),{format:function(t){var n=D(t+="",C);return n.toString=function(){return t},n},parse:function(t){var n=b(t+="",Z);return n.toString=function(){return t},n},utcFormat:function(t){var n=D(t+="",U);return n.toString=function(){return t},n},utcParse:function(t){var n=b(t,k);return n.toString=function(){return t},n}}}(),z=_.format,B=_.utcFormat,I=_.utcParse}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Date.prototype.toISOString||B("%Y-%m-%dT%H:%M:%S.%LZ"),+new Date("2000-01-01T00:00:00.000Z")||I("%Y-%m-%dT%H:%M:%S.%LZ");const rn=navigator.language||"en-GB",un={PERCENTAGE:t=>d(".0%")(t),GROUPED_TWO_DIGITS:t=>d(".2s")(t),GROUPED_THOUSANDS_TWO_DIGITS:t=>d(",.2r")(t),CURRENCY:(t,n)=>((t,n)=>new Intl.NumberFormat(rn,{style:"currency",currency:n}).format(t))(t,n),SHORT_MONTH:t=>z("%b")(new Date(1e3*t)),LARGE_MONTH:t=>z("%B")(new Date(1e3*t)),DAY_AND_MONTH:t=>z("%b %d")(new Date(1e3*t)),ANY:t=>`${t}`},on=(t,n,e)=>"CURRENCY"===t?un[t](n,e):un[t](n),an=(t,n)=>t[n%t.length],cn=(t,n="tooltip")=>{const e={element:t.getElementsByClassName(n)[0],component:null};return e.element&&(e.component=t.querySelector(`${n}-chart`),e.component.tooltip(e.element)),e.component},sn=(t,n,e="legend")=>{const r={element:t.getElementsByClassName(e)[0],component:null};return r.element&&(r.component=t.querySelector(`${e}-chart`),r.component.callOnClick(n)),r.component},ln=()=>{throw new Error("The data injected isn't valid.")},fn=({data:t,labels:n})=>t.length>0&&n.length>=1||ln(),gn={pieChart:{labelFormat:"ANY",dataFormat:"ANY",currency:"EUR"},styles:{width:"0",height:"0",margin:"0"},labels:[],colors:[],data:[],hasData:t=>fn(t)},hn={barChart:{axis:{x:{visible:!0,gridVisible:!0,format:"ANY",currency:"EUR"},y:{visible:!0,gridVisible:!0,format:"ANY",currency:"EUR"}},margin:{top:0,right:0,bottom:0,left:0}},styles:{width:"0",height:"0",margin:"0"},labels:[],colors:[],data:[],hasData:t=>fn(t)},mn={lineChart:{axis:{x:{visible:!0,gridVisible:!0,format:"ANY",label:"",currency:"EUR"},y:{visible:!0,gridVisible:!0,format:"ANY",label:"",currency:"EUR"}},margin:{top:0,right:0,bottom:0,left:0}},styles:{width:"0",height:"0",margin:"0"},labels:[],colors:[],data:[],hasData:t=>fn(t)},yn={lineChart:{axis:{x:{visible:!0,gridVisible:!0,format:"ANY",label:"",currency:"EUR"},y:{visible:!0,gridVisible:!0,format:"ANY",label:"",currency:"EUR"}},margin:{top:0,right:0,bottom:0,left:0}},lineAnnotationsChart:{increaseHeight:100,tickSeparation:"2em",annotations:[],imagePathOneAnnotation:"assets/images/message_one.svg",imagePathSomeAnnotations:"assets/images/message_some.svg"},styles:{width:"0",height:"0",margin:"0"},labels:[],colors:[],data:[],hasData:t=>(({data:t,lineAnnotationsChart:n})=>t.length>0&&n.increaseHeight>0&&""!==n.tickSeparation&&""!==n.imagePathOneAnnotation&&""!==n.imagePathSomeAnnotations||ln())(t)},dn={bcgMatrixChart:{axis:{x:{visible:!1,gridVisible:!1,format:"ANY",currency:"EUR"},y:{visible:!1,gridVisible:!1,format:"ANY",currency:"EUR"}},value:{format:"ANY",currency:"EUR"},margin:{top:0,right:0,bottom:0,left:0},quadrants:!0},styles:{width:"0",height:"0",margin:"0"},colors:[],labels:[],data:[],hasData:t=>(({data:t})=>t.length>0||ln())(t)},Mn={labels:[],colors:[],type:"horizontal",styles:{width:"100%",height:"50px",padding:"10px 0"}};export{l as a,C as b,M as c,U as d,v as e,d as f,u as g,dn as h,cn as i,sn as j,on as k,an as l,hn as m,Mn as n,yn as o,mn as p,gn as q};