const t=window.D3Stencil.h;import{g as r,h as a,i as e,j as i,k as n,l as h}from"./chunk-6e0c6752.js";import{a as s,b as o}from"./chunk-d9a959cc.js";import{a as c,b as u,c as l,d}from"./chunk-e5eef6f6.js";import"./chunk-1767601e.js";import{a as g}from"./chunk-696ad60d.js";function p(t){var r=0,a=t.children,e=a&&a.length;if(e)for(;--e>=0;)r+=a[e].value;else r=1;t.value=r}function f(t,r){var a,e,i,n,h,s=new b(t),o=+t.value&&(s.value=t.value),c=[s];for(null==r&&(r=x);a=c.pop();)if(o&&(a.value=+a.data.value),(i=r(a.data))&&(h=i.length))for(a.children=new Array(h),n=h-1;n>=0;--n)c.push(e=a.children[n]=new b(i[n])),e.parent=a,e.depth=a.depth+1;return s.eachBefore(v)}function x(t){return t.children}function y(t){t.data=t.data.data}function v(t){var r=0;do{t.height=r}while((t=t.parent)&&t.height<++r)}function b(t){this.data=t,this.depth=this.height=0,this.parent=null}b.prototype=f.prototype={constructor:b,count:function(){return this.eachAfter(p)},each:function(t){var r,a,e,i,n=this,h=[n];do{for(r=h.reverse(),h=[];n=r.pop();)if(t(n),a=n.children)for(e=0,i=a.length;e<i;++e)h.push(a[e])}while(h.length);return this},eachAfter:function(t){for(var r,a,e,i=this,n=[i],h=[];i=n.pop();)if(h.push(i),r=i.children)for(a=0,e=r.length;a<e;++a)n.push(r[a]);for(;i=h.pop();)t(i);return this},eachBefore:function(t){for(var r,a,e=this,i=[e];e=i.pop();)if(t(e),r=e.children)for(a=r.length-1;a>=0;--a)i.push(r[a]);return this},sum:function(t){return this.eachAfter(function(r){for(var a=+t(r.data)||0,e=r.children,i=e&&e.length;--i>=0;)a+=e[i].value;r.value=a})},sort:function(t){return this.eachBefore(function(r){r.children&&r.children.sort(t)})},path:function(t){for(var r=this,a=function(t,r){if(t===r)return t;var a=t.ancestors(),e=r.ancestors(),i=null;for(t=a.pop(),r=e.pop();t===r;)i=t,t=a.pop(),r=e.pop();return i}(r,t),e=[r];r!==a;)e.push(r=r.parent);for(var i=e.length;t!==a;)e.splice(i,0,t),t=t.parent;return e},ancestors:function(){for(var t=this,r=[t];t=t.parent;)r.push(t);return r},descendants:function(){var t=[];return this.each(function(r){t.push(r)}),t},leaves:function(){var t=[];return this.eachBefore(function(r){r.children||t.push(r)}),t},links:function(){var t=this,r=[];return t.each(function(a){a!==t&&r.push({source:a.parent,target:a})}),r},copy:function(){return f(this).eachBefore(y)}};var M=Array.prototype.slice;function m(t,r){var a,e;if(C(r,t))return[r];for(a=0;a<t.length;++a)if(w(r,t[a])&&C(B(t[a],r),t))return[t[a],r];for(a=0;a<t.length-1;++a)for(e=a+1;e<t.length;++e)if(w(B(t[a],t[e]),r)&&w(B(t[a],r),t[e])&&w(B(t[e],r),t[a])&&C(k(t[a],t[e],r),t))return[t[a],t[e],r];throw new Error}function w(t,r){var a=t.r-r.r,e=r.x-t.x,i=r.y-t.y;return a<0||a*a<e*e+i*i}function D(t,r){var a=t.r-r.r+1e-6,e=r.x-t.x,i=r.y-t.y;return a>0&&a*a>e*e+i*i}function C(t,r){for(var a=0;a<r.length;++a)if(!D(t,r[a]))return!1;return!0}function _(t){switch(t.length){case 1:return{x:(r=t[0]).x,y:r.y,r:r.r};case 2:return B(t[0],t[1]);case 3:return k(t[0],t[1],t[2])}var r}function B(t,r){var a=t.x,e=t.y,i=t.r,n=r.x,h=r.y,s=r.r,o=n-a,c=h-e,u=s-i,l=Math.sqrt(o*o+c*c);return{x:(a+n+o/l*u)/2,y:(e+h+c/l*u)/2,r:(l+i+s)/2}}function k(t,r,a){var e=t.x,i=t.y,n=t.r,h=r.x,s=r.y,o=r.r,c=a.x,u=a.y,l=a.r,d=e-h,g=e-c,p=i-s,f=i-u,x=o-n,y=l-n,v=e*e+i*i-n*n,b=v-h*h-s*s+o*o,M=v-c*c-u*u+l*l,m=g*p-d*f,w=(p*M-f*b)/(2*m)-e,D=(f*x-p*y)/m,C=(g*b-d*M)/(2*m)-i,_=(d*y-g*x)/m,B=D*D+_*_-1,k=2*(n+w*D+C*_),S=w*w+C*C-n*n,A=-(B?(k+Math.sqrt(k*k-4*B*S))/(2*B):S/k);return{x:e+w+D*A,y:i+C+_*A,r:A}}function S(t,r,a){var e,i,n,h,s=t.x-r.x,o=t.y-r.y,c=s*s+o*o;c?(i=r.r+a.r,h=t.r+a.r,(i*=i)>(h*=h)?(e=(c+h-i)/(2*c),n=Math.sqrt(Math.max(0,h/c-e*e)),a.x=t.x-e*s-n*o,a.y=t.y-e*o+n*s):(e=(c+i-h)/(2*c),n=Math.sqrt(Math.max(0,i/c-e*e)),a.x=r.x+e*s-n*o,a.y=r.y+e*o+n*s)):(a.x=r.x+a.r,a.y=r.y)}function A(t,r){var a=t.r+r.r-1e-6,e=r.x-t.x,i=r.y-t.y;return a>0&&a*a>e*e+i*i}function E(t){var r=t._,a=t.next._,e=r.r+a.r,i=(r.x*a.r+a.x*r.r)/e,n=(r.y*a.r+a.y*r.r)/e;return i*i+n*n}function O(t){this._=t,this.next=null,this.previous=null}function j(){return 0}function z(t){return Math.sqrt(t.value)}function F(t){return function(r){r.children||(r.r=Math.max(0,+t(r)||0))}}function R(t,r){return function(a){if(e=a.children){var e,i,n,h=e.length,s=t(a)*r||0;if(s)for(i=0;i<h;++i)e[i].r+=s;if(n=function(t){if(!(i=t.length))return 0;var r,a,e,i,n,h,s,o,c,u,l;if((r=t[0]).x=0,r.y=0,!(i>1))return r.r;if(r.x=-(a=t[1]).r,a.x=r.r,a.y=0,!(i>2))return r.r+a.r;S(a,r,e=t[2]),r=new O(r),a=new O(a),e=new O(e),r.next=e.previous=a,a.next=r.previous=e,e.next=a.previous=r;t:for(s=3;s<i;++s){S(r._,a._,e=t[s]),e=new O(e),o=a.next,c=r.previous,u=a._.r,l=r._.r;do{if(u<=l){if(A(o._,e._)){r.next=a=o,a.previous=r,--s;continue t}u+=o._.r,o=o.next}else{if(A(c._,e._)){(r=c).next=a,a.previous=r,--s;continue t}l+=c._.r,c=c.previous}}while(o!==c.next);for(e.previous=r,e.next=a,r.next=a.previous=a=e,n=E(r);(e=e.next)!==a;)(h=E(e))<n&&(r=e,n=h);a=r.next}for(r=[a._],e=a;(e=e.next)!==a;)r.push(e._);for(e=function(t){for(var r,a,e=0,i=(t=function(t){for(var r,a,e=t.length;e;)a=Math.random()*e--|0,r=t[e],t[e]=t[a],t[a]=r;return t}(M.call(t))).length,n=[];e<i;)r=t[e],a&&D(a,r)?++e:(a=_(n=m(n,r)),e=0);return a}(r),s=0;s<i;++s)(r=t[s]).x-=e.x,r.y-=e.y;return e.r}(e),s)for(i=0;i<h;++i)e[i].r-=s;a.r=n+s}}}function q(t){return function(r){var a=r.parent;r.r*=t,a&&(r.x=a.x+t*r.x,r.y=a.y+t*r.y)}}class T{constructor(){this.dataSet={children:[]},this.bubbleOptions={padding:20,height:15,fontSize:13,opacity:.8}}componentWillLoad(){this.graphDataMerged=r(Object.assign({},a),this.graphData)}componentDidLoad(){this.svg=s(this.bgcMatrixChartEl.getElementsByTagName("svg")[0]),this.height=this.svg.node().getBoundingClientRect().height-this.graphDataMerged.bcgMatrixChart.margin.top-this.graphDataMerged.bcgMatrixChart.margin.bottom,this.tooltipEl=e(this.bgcMatrixChartEl),this.legendEl=i(this.bgcMatrixChartEl,this.eventsLegend.bind(this)),this.dataSet.children=this.graphDataMerged.data,this.drawChart()}updateGraphData(t){this.graphDataMerged=r(Object.assign({},a),t),this.drawChart()}drawChart(){this.hasData()&&(this.reSetRoot(),this.width=this.svg.node().getBoundingClientRect().width-this.graphDataMerged.bcgMatrixChart.margin.left-this.graphDataMerged.bcgMatrixChart.margin.right,this.x=c().domain([0,Math.round(u(this.graphDataMerged.data,t=>t.x_data))]).range([0,this.width]),this.y=c().domain([0,u(this.graphDataMerged.data,t=>t.y_data)]).range([this.height,0]),this.drawAxis(),this.drawGrid(),this.drawQuadrants(),this.drawBubbles())}hasData(){return this.graphDataMerged.hasData(this.graphDataMerged)}reSetRoot(){this.root&&this.root.remove(),this.root=this.svg.append("g").attr("transform",`translate(${this.graphDataMerged.bcgMatrixChart.margin.left}, ${this.graphDataMerged.bcgMatrixChart.margin.top})`)}drawAxis(){this.graphDataMerged.bcgMatrixChart.axis.x.visible&&this.root.append("g").attr("class","x axis").attr("transform",`translate(0, ${this.height})`).call(l(this.x)),this.graphDataMerged.bcgMatrixChart.axis.y.visible&&this.root.append("g").attr("class","y axis").call(d(this.y).tickFormat(t=>n(this.graphDataMerged.bcgMatrixChart.axis.y.format,t,this.graphDataMerged.bcgMatrixChart.axis.y.currency)))}drawGrid(){this.graphDataMerged.bcgMatrixChart.axis.x.gridVisible&&this.root.append("g").attr("class","grid").call(l(this.x).tickSize(this.height).tickFormat(()=>"")),this.graphDataMerged.bcgMatrixChart.axis.y.gridVisible&&this.root.append("g").attr("class","grid").call(d(this.y).tickSize(-this.width).tickFormat(()=>""))}drawQuadrants(){if(this.graphDataMerged.bcgMatrixChart.quadrants){const t=this.x.domain(),r=this.y.domain(),a=this.root.append("g").attr("class","quadrants");a.append("line").attr("x1",()=>this.x(t[0])).attr("x2",()=>this.x(t[1])).attr("y1",()=>this.y((r[0]+r[1])/2)).attr("y2",()=>this.y((r[0]+r[1])/2)),a.append("line").attr("x1",()=>this.x((t[0]+t[1])/2)).attr("x2",()=>this.x((t[0]+t[1])/2)).attr("y1",()=>this.y(r[0])).attr("y2",()=>this.y(r[1]))}}drawBubbles(){const t=function(){var t=null,r=1,a=1,e=j;function i(i){return i.x=r/2,i.y=a/2,t?i.eachBefore(F(t)).eachAfter(R(e,.5)).eachBefore(q(1)):i.eachBefore(F(z)).eachAfter(R(j,1)).eachAfter(R(e,i.r/Math.min(r,a))).eachBefore(q(Math.min(r,a)/(2*i.r))),i}return i.radius=function(r){return arguments.length?(t=null==(a=r)?null:function(t){if("function"!=typeof t)throw new Error;return t}(a),i):t;var a},i.size=function(t){return arguments.length?(r=+t[0],a=+t[1],i):[r,a]},i.padding=function(t){return arguments.length?(e="function"==typeof t?t:function(t){return function(){return t}}(+t),i):e},i}().size([this.width-2*(this.graphDataMerged.bcgMatrixChart.margin.left+this.graphDataMerged.bcgMatrixChart.margin.right),this.height-2*(this.graphDataMerged.bcgMatrixChart.margin.top+this.graphDataMerged.bcgMatrixChart.margin.bottom)]).padding(1.5),r=f(this.dataSet).sum(t=>t.rel_size),a=this.root.append("g").attr("class","bubble-group").selectAll(".bubble").data(t(r).descendants()).enter().filter(t=>!t.children).append("g").attr("class","bubble").on("mousemove",({data:t})=>this.eventsTooltip({data:t,isToShow:!0})).on("mouseout",()=>this.eventsTooltip({isToShow:!1}));a.filter(t=>t.r>0).append("circle").attr("cx",({data:t})=>this.x(t.x_data)).attr("cy",({data:t})=>this.y(t.y_data)).attr("r",t=>t.r).style("fill",(t,r)=>h(this.graphData.colors,r)).style("opacity",this.bubbleOptions.opacity),a.filter(t=>t.r>0).append("rect").attr("width",t=>2*t.r+this.bubbleOptions.padding).attr("height",this.bubbleOptions.height).attr("x",t=>this.x(t.data.x_data)-t.r-this.bubbleOptions.padding/2).attr("y",t=>this.y(t.data.y_data)-this.bubbleOptions.fontSize).attr("stroke",(t,r)=>h(this.graphData.colors,r)).attr("stroke-width",1).attr("fill","#FFFFFF"),a.filter(t=>t.r>0).append("text").attr("dx",({data:t})=>this.x(t.x_data)).attr("dy",({data:t})=>this.y(t.y_data)).style("text-anchor","middle").text((t,r)=>this.graphData.labels[r]).attr("font-size",this.bubbleOptions.fontSize).attr("fill","#000000")}eventsTooltip({data:t,isToShow:r}){this.tooltipEl&&(r?(()=>{this.tooltipEl.show(`${t.tooltipInfo}`,[o.pageX,o.pageY])})():(()=>this.tooltipEl.hide())())}eventsLegend(t){console.log(t)}render(){return t("div",{class:"o-layout"},t("div",{class:"o-layout--chart"},t("svg",{style:this.graphDataMerged.styles})),t("div",{class:"o-layout--slot"},t("slot",{name:"tooltip"}),t("slot",{name:"legend"})))}static get is(){return"bcg-matrix-chart"}static get properties(){return{bgcMatrixChartEl:{elementRef:!0},graphData:{type:"Any",attr:"graph-data"},updateGraphData:{method:!0}}}static get style(){return".o-layout{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout,.o-layout--chart{width:100%}.is--vertical .o-layout--chart{width:90%}.o-layout--slot{width:100%}.is--vertical .o-layout--slot{width:10%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}bcg-matrix-chart .grid line,bcg-matrix-chart .quadrants line{stroke:#d3d3d3;stroke-opacity:.7;shape-rendering:crispEdges}bcg-matrix-chart .grid path,bcg-matrix-chart .quadrants path{stroke-width:0}bcg-matrix-chart .bubble text{cursor:default}"}}!function(t,r,a,e){var i,n=arguments.length,h=n<3?r:null===e?e=Object.getOwnPropertyDescriptor(r,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,r,a,e);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(h=(n<3?i(h):n>3?i(r,a,h):i(r,a))||h);n>3&&h&&Object.defineProperty(r,a,h)}([g()],T.prototype,"drawChart",null);export{T as BcgMatrixChart};