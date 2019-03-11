var t="http://www.w3.org/1999/xhtml",n={svg:"http://www.w3.org/2000/svg",xhtml:t,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function e(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),n.hasOwnProperty(e)?{space:n[e],local:t}:t}function r(n){var r=e(n);return(r.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(n){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===t&&e.documentElement.namespaceURI===t?e.createElement(n):e.createElementNS(r,n)}})(r)}function i(){}function o(t){return null==t?i:function(){return this.querySelector(t)}}function u(){return[]}function s(t){return null==t?u:function(){return this.querySelectorAll(t)}}function a(t){return function(){return this.matches(t)}}function c(t){return new Array(t.length)}function l(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}l.prototype={constructor:l,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var h="$";function f(t,n,e,r,i,o){for(var u,s=0,a=n.length,c=o.length;s<c;++s)(u=n[s])?(u.__data__=o[s],r[s]=u):e[s]=new l(t,o[s]);for(;s<a;++s)(u=n[s])&&(i[s]=u)}function p(t,n,e,r,i,o,u){var s,a,c,f={},p=n.length,_=o.length,d=new Array(p);for(s=0;s<p;++s)(a=n[s])&&(d[s]=c=h+u.call(a,a.__data__,s,n),c in f?i[s]=a:f[c]=a);for(s=0;s<_;++s)(a=f[c=h+u.call(t,o[s],s,o)])?(r[s]=a,a.__data__=o[s],f[c]=null):e[s]=new l(t,o[s]);for(s=0;s<p;++s)(a=n[s])&&f[d[s]]===a&&(i[s]=a)}function _(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function d(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function v(t,n){return t.style.getPropertyValue(n)||d(t).getComputedStyle(t,null).getPropertyValue(n)}function y(t){return t.trim().split(/^|\s+/)}function m(t){return t.classList||new g(t)}function g(t){this._node=t,this._names=y(t.getAttribute("class")||"")}function w(t,n){for(var e=m(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function A(t,n){for(var e=m(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function x(){this.textContent=""}function b(){this.innerHTML=""}function S(){this.nextSibling&&this.parentNode.appendChild(this)}function N(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function E(){return null}function C(){var t=this.parentNode;t&&t.removeChild(this)}function L(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function P(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}g.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var B={},D=null;function q(t,n,e){return t=O(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function O(t,n,e){return function(r){var i=D;D=r;try{t.call(this,this.__data__,n,e)}finally{D=i}}}function M(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function T(t,n,e){var r=B.hasOwnProperty(t.type)?q:O;return function(i,o,u){var s,a=this.__on,c=r(n,o,u);if(a)for(var l=0,h=a.length;l<h;++l)if((s=a[l]).type===t.type&&s.name===t.name)return this.removeEventListener(s.type,s.listener,s.capture),this.addEventListener(s.type,s.listener=c,s.capture=e),void(s.value=n);this.addEventListener(t.type,c,e),s={type:t.type,name:t.name,value:n,listener:c,capture:e},a?a.push(s):this.__on=[s]}}function H(t,n,e){var r=d(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(B={mouseenter:"mouseover",mouseleave:"mouseout"}));var I=[null];function R(t,n){this._groups=t,this._parents=n}function U(){return new R([[document.documentElement]],I)}function V(t){return"string"==typeof t?new R([[document.querySelector(t)]],[document.documentElement]):new R([[t]],I)}R.prototype=U.prototype={constructor:R,select:function(t){"function"!=typeof t&&(t=o(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u,s,a=n[i],c=a.length,l=r[i]=new Array(c),h=0;h<c;++h)(u=a[h])&&(s=t.call(u,u.__data__,h,a))&&("__data__"in u&&(s.__data__=u.__data__),l[h]=s);return new R(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=s(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,l=0;l<c;++l)(u=a[l])&&(r.push(t.call(u,u.__data__,l,a)),i.push(u));return new R(r,i)},filter:function(t){"function"!=typeof t&&(t=a(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],s=u.length,c=r[i]=[],l=0;l<s;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&c.push(o);return new R(r,this._parents)},data:function(t,n){if(!t)return v=new Array(this.size()),l=-1,this.each(function(t){v[++l]=t}),v;var e,r=n?p:f,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,s=new Array(u),a=new Array(u),c=new Array(u),l=0;l<u;++l){var h=i[l],_=o[l],d=_.length,v=t.call(h,h&&h.__data__,l,i),y=v.length,m=a[l]=new Array(y),g=s[l]=new Array(y);r(h,_,m,g,c[l]=new Array(d),v,n);for(var w,A,x=0,b=0;x<y;++x)if(w=m[x]){for(x>=b&&(b=x+1);!(A=g[b])&&++b<y;);w._next=A||null}}return(s=new R(s,i))._enter=a,s._exit=c,s},enter:function(){return new R(this._enter||this._groups.map(c),this._parents)},exit:function(){return new R(this._exit||this._groups.map(c),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=Math.min(r,e.length),o=new Array(r),u=0;u<i;++u)for(var s,a=n[u],c=e[u],l=a.length,h=o[u]=new Array(l),f=0;f<l;++f)(s=a[f]||c[f])&&(h[f]=s);for(;u<r;++u)o[u]=n[u];return new R(o,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=_);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,s=e[o],a=s.length,c=i[o]=new Array(a),l=0;l<a;++l)(u=s[l])&&(c[l]=u);c.sort(n)}return new R(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,s=o.length;u<s;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var r=e(t);if(arguments.length<2){var i=this.node();return r.local?i.getAttributeNS(r.space,r.local):i.getAttribute(r)}return this.each((null==n?r.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?r.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:r.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(r,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):v(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=y(t+"");if(arguments.length<2){for(var r=m(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?w:A)(this,t)}}:n?function(t){return function(){w(this,t)}}:function(t){return function(){A(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?x:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?b:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(S)},lower:function(){return this.each(N)},append:function(t){var n="function"==typeof t?t:r(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:r(t),i=null==n?E:"function"==typeof n?n:o(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})},remove:function(){return this.each(C)},clone:function(t){return this.select(t?P:L)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}),u=o.length;if(!(arguments.length<2)){for(s=n?T:M,null==e&&(e=!1),r=0;r<u;++r)this.each(s(o[r],n,e));return this}var s=this.node().__on;if(s)for(var a,c=0,l=s.length;c<l;++c)for(r=0,a=s[c];r<u;++r)if((i=o[r]).type===a.type&&i.name===a.name)return a.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return H(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return H(this,t,n)}})(t,n))}};export{V as a,D as b,e as c,a as d,o as e,s as f,U as g,v as h};