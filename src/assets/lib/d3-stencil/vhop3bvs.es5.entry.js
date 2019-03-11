D3Stencil.loadBundle("vhop3bvs",["exports","./chunk-3fb94679.js","./chunk-1fa210c9.js","./chunk-e7d195e0.js","./chunk-f7062f5a.js","./chunk-ef743929.js"],function(t,r,e,n,a,i){var o=window.D3Stencil.h;function h(t){var r=0,e=t.children,n=e&&e.length;if(n)for(;--n>=0;)r+=e[n].value;else r=1;t.value=r}function u(t,r){var e,n,a,i,o,h=new l(t),u=+t.value&&(h.value=t.value),c=[h];for(null==r&&(r=s);e=c.pop();)if(u&&(e.value=+e.data.value),(a=r(e.data))&&(o=a.length))for(e.children=new Array(o),i=o-1;i>=0;--i)c.push(n=e.children[i]=new l(a[i])),n.parent=e,n.depth=e.depth+1;return h.eachBefore(f)}function s(t){return t.children}function c(t){t.data=t.data.data}function f(t){var r=0;do{t.height=r}while((t=t.parent)&&t.height<++r)}function l(t){this.data=t,this.depth=this.height=0,this.parent=null}l.prototype=u.prototype={constructor:l,count:function(){return this.eachAfter(h)},each:function(t){var r,e,n,a,i=this,o=[i];do{for(r=o.reverse(),o=[];i=r.pop();)if(t(i),e=i.children)for(n=0,a=e.length;n<a;++n)o.push(e[n])}while(o.length);return this},eachAfter:function(t){for(var r,e,n,a=this,i=[a],o=[];a=i.pop();)if(o.push(a),r=a.children)for(e=0,n=r.length;e<n;++e)i.push(r[e]);for(;a=o.pop();)t(a);return this},eachBefore:function(t){for(var r,e,n=this,a=[n];n=a.pop();)if(t(n),r=n.children)for(e=r.length-1;e>=0;--e)a.push(r[e]);return this},sum:function(t){return this.eachAfter(function(r){for(var e=+t(r.data)||0,n=r.children,a=n&&n.length;--a>=0;)e+=n[a].value;r.value=e})},sort:function(t){return this.eachBefore(function(r){r.children&&r.children.sort(t)})},path:function(t){for(var r=this,e=function(t,r){if(t===r)return t;var e=t.ancestors(),n=r.ancestors(),a=null;for(t=e.pop(),r=n.pop();t===r;)a=t,t=e.pop(),r=n.pop();return a}(r,t),n=[r];r!==e;)n.push(r=r.parent);for(var a=n.length;t!==e;)n.splice(a,0,t),t=t.parent;return n},ancestors:function(){for(var t=this,r=[t];t=t.parent;)r.push(t);return r},descendants:function(){var t=[];return this.each(function(r){t.push(r)}),t},leaves:function(){var t=[];return this.eachBefore(function(r){r.children||t.push(r)}),t},links:function(){var t=this,r=[];return t.each(function(e){e!==t&&r.push({source:e.parent,target:e})}),r},copy:function(){return u(this).eachBefore(c)}};var p=Array.prototype.slice;function d(t,r){var e,n;if(y(r,t))return[r];for(e=0;e<t.length;++e)if(g(r,t[e])&&y(v(t[e],r),t))return[t[e],r];for(e=0;e<t.length-1;++e)for(n=e+1;n<t.length;++n)if(g(v(t[e],t[n]),r)&&g(v(t[e],r),t[n])&&g(v(t[n],r),t[e])&&y(M(t[e],t[n],r),t))return[t[e],t[n],r];throw new Error}function g(t,r){var e=t.r-r.r,n=r.x-t.x,a=r.y-t.y;return e<0||e*e<n*n+a*a}function x(t,r){var e=t.r-r.r+1e-6,n=r.x-t.x,a=r.y-t.y;return e>0&&e*e>n*n+a*a}function y(t,r){for(var e=0;e<r.length;++e)if(!x(t,r[e]))return!1;return!0}function b(t){switch(t.length){case 1:return{x:(r=t[0]).x,y:r.y,r:r.r};case 2:return v(t[0],t[1]);case 3:return M(t[0],t[1],t[2])}var r}function v(t,r){var e=t.x,n=t.y,a=t.r,i=r.x,o=r.y,h=r.r,u=i-e,s=o-n,c=h-a,f=Math.sqrt(u*u+s*s);return{x:(e+i+u/f*c)/2,y:(n+o+s/f*c)/2,r:(f+a+h)/2}}function M(t,r,e){var n=t.x,a=t.y,i=t.r,o=r.x,h=r.y,u=r.r,s=e.x,c=e.y,f=e.r,l=n-o,p=n-s,d=a-h,g=a-c,x=u-i,y=f-i,b=n*n+a*a-i*i,v=b-o*o-h*h+u*u,M=b-s*s-c*c+f*f,m=p*d-l*g,D=(d*M-g*v)/(2*m)-n,w=(g*x-d*y)/m,_=(p*v-l*M)/(2*m)-a,C=(l*y-p*x)/m,A=w*w+C*C-1,B=2*(i+D*w+_*C),j=D*D+_*_-i*i,E=-(A?(B+Math.sqrt(B*B-4*A*j))/(2*A):j/B);return{x:n+D+w*E,y:a+_+C*E,r:E}}function m(t,r,e){var n,a,i,o,h=t.x-r.x,u=t.y-r.y,s=h*h+u*u;s?(a=r.r+e.r,o=t.r+e.r,(a*=a)>(o*=o)?(n=(s+o-a)/(2*s),i=Math.sqrt(Math.max(0,o/s-n*n)),e.x=t.x-n*h-i*u,e.y=t.y-n*u+i*h):(n=(s+a-o)/(2*s),i=Math.sqrt(Math.max(0,a/s-n*n)),e.x=r.x+n*h-i*u,e.y=r.y+n*u+i*h)):(e.x=r.x+e.r,e.y=r.y)}function D(t,r){var e=t.r+r.r-1e-6,n=r.x-t.x,a=r.y-t.y;return e>0&&e*e>n*n+a*a}function w(t){var r=t._,e=t.next._,n=r.r+e.r,a=(r.x*e.r+e.x*r.r)/n,i=(r.y*e.r+e.y*r.r)/n;return a*a+i*i}function _(t){this._=t,this.next=null,this.previous=null}function C(){return 0}function A(t){return Math.sqrt(t.value)}function B(t){return function(r){r.children||(r.r=Math.max(0,+t(r)||0))}}function j(t,r){return function(e){if(n=e.children){var n,a,i,o=n.length,h=t(e)*r||0;if(h)for(a=0;a<o;++a)n[a].r+=h;if(i=function(t){if(!(a=t.length))return 0;var r,e,n,a,i,o,h,u,s,c,f;if((r=t[0]).x=0,r.y=0,!(a>1))return r.r;if(r.x=-(e=t[1]).r,e.x=r.r,e.y=0,!(a>2))return r.r+e.r;m(e,r,n=t[2]),r=new _(r),e=new _(e),n=new _(n),r.next=n.previous=e,e.next=r.previous=n,n.next=e.previous=r;t:for(h=3;h<a;++h){m(r._,e._,n=t[h]),n=new _(n),u=e.next,s=r.previous,c=e._.r,f=r._.r;do{if(c<=f){if(D(u._,n._)){r.next=e=u,e.previous=r,--h;continue t}c+=u._.r,u=u.next}else{if(D(s._,n._)){(r=s).next=e,e.previous=r,--h;continue t}f+=s._.r,s=s.previous}}while(u!==s.next);for(n.previous=r,n.next=e,r.next=e.previous=e=n,i=w(r);(n=n.next)!==e;)(o=w(n))<i&&(r=n,i=o);e=r.next}for(r=[e._],n=e;(n=n.next)!==e;)r.push(n._);for(n=function(t){for(var r,e,n=0,a=(t=function(t){for(var r,e,n=t.length;n;)e=Math.random()*n--|0,r=t[n],t[n]=t[e],t[e]=r;return t}(p.call(t))).length,i=[];n<a;)r=t[n],e&&x(e,r)?++n:(e=b(i=d(i,r)),n=0);return e}(r),h=0;h<a;++h)(r=t[h]).x-=n.x,r.y-=n.y;return n.r}(n),h)for(a=0;a<o;++a)n[a].r-=h;e.r=i+h}}}function E(t){return function(r){var e=r.parent;r.r*=t,e&&(r.x=e.x+t*r.x,r.y=e.y+t*r.y)}}var O=function(){function t(){this.dataSet={children:[]},this.bubbleOptions={padding:20,height:15,fontSize:13,opacity:.8}}return t.prototype.componentWillLoad=function(){this.graphDataMerged=r.objectAssignDeep(Object.assign({},r.DEFAULT_GRAPH_DATA_BCG),this.graphData)},t.prototype.componentDidLoad=function(){this.svg=e.select(this.bgcMatrixChartEl.getElementsByTagName("svg")[0]),this.height=this.svg.node().getBoundingClientRect().height-this.graphDataMerged.bcgMatrixChart.margin.top-this.graphDataMerged.bcgMatrixChart.margin.bottom,this.tooltipEl=r.initTooltipIfExists(this.bgcMatrixChartEl),this.legendEl=r.initLegendIfExists(this.bgcMatrixChartEl,this.eventsLegend.bind(this)),this.dataSet.children=this.graphDataMerged.data,this.drawChart()},t.prototype.updateGraphData=function(t){this.graphDataMerged=r.objectAssignDeep(Object.assign({},r.DEFAULT_GRAPH_DATA_BCG),t),this.drawChart()},t.prototype.drawChart=function(){this.hasData()&&(this.reSetRoot(),this.width=this.svg.node().getBoundingClientRect().width-this.graphDataMerged.bcgMatrixChart.margin.left-this.graphDataMerged.bcgMatrixChart.margin.right,this.x=n.linear().domain([0,Math.round(n.max(this.graphDataMerged.data,function(t){return t.x_data}))]).range([0,this.width]),this.y=n.linear().domain([0,n.max(this.graphDataMerged.data,function(t){return t.y_data})]).range([this.height,0]),this.drawAxis(),this.drawGrid(),this.drawQuadrants(),this.drawBubbles())},t.prototype.hasData=function(){return this.graphDataMerged.hasData(this.graphDataMerged)},t.prototype.reSetRoot=function(){this.root&&this.root.remove(),this.root=this.svg.append("g").attr("transform","translate("+this.graphDataMerged.bcgMatrixChart.margin.left+", "+this.graphDataMerged.bcgMatrixChart.margin.top+")")},t.prototype.drawAxis=function(){var t=this;this.graphDataMerged.bcgMatrixChart.axis.x.visible&&this.root.append("g").attr("class","x axis").attr("transform","translate(0, "+this.height+")").call(n.axisBottom(this.x)),this.graphDataMerged.bcgMatrixChart.axis.y.visible&&this.root.append("g").attr("class","y axis").call(n.axisLeft(this.y).tickFormat(function(e){return r.formatter(t.graphDataMerged.bcgMatrixChart.axis.y.format,e,t.graphDataMerged.bcgMatrixChart.axis.y.currency)}))},t.prototype.drawGrid=function(){this.graphDataMerged.bcgMatrixChart.axis.x.gridVisible&&this.root.append("g").attr("class","grid").call(n.axisBottom(this.x).tickSize(this.height).tickFormat(function(){return""})),this.graphDataMerged.bcgMatrixChart.axis.y.gridVisible&&this.root.append("g").attr("class","grid").call(n.axisLeft(this.y).tickSize(-this.width).tickFormat(function(){return""}))},t.prototype.drawQuadrants=function(){var t=this;if(this.graphDataMerged.bcgMatrixChart.quadrants){var r=this.x.domain(),e=this.y.domain(),n=this.root.append("g").attr("class","quadrants");n.append("line").attr("x1",function(){return t.x(r[0])}).attr("x2",function(){return t.x(r[1])}).attr("y1",function(){return t.y((e[0]+e[1])/2)}).attr("y2",function(){return t.y((e[0]+e[1])/2)}),n.append("line").attr("x1",function(){return t.x((r[0]+r[1])/2)}).attr("x2",function(){return t.x((r[0]+r[1])/2)}).attr("y1",function(){return t.y(e[0])}).attr("y2",function(){return t.y(e[1])})}},t.prototype.drawBubbles=function(){var t=this,e=function(){var t=null,r=1,e=1,n=C;function a(a){return a.x=r/2,a.y=e/2,t?a.eachBefore(B(t)).eachAfter(j(n,.5)).eachBefore(E(1)):a.eachBefore(B(A)).eachAfter(j(C,1)).eachAfter(j(n,a.r/Math.min(r,e))).eachBefore(E(Math.min(r,e)/(2*a.r))),a}return a.radius=function(r){return arguments.length?(t=null==(e=r)?null:function(t){if("function"!=typeof t)throw new Error;return t}(e),a):t;var e},a.size=function(t){return arguments.length?(r=+t[0],e=+t[1],a):[r,e]},a.padding=function(t){return arguments.length?(n="function"==typeof t?t:function(t){return function(){return t}}(+t),a):n},a}().size([this.width-2*(this.graphDataMerged.bcgMatrixChart.margin.left+this.graphDataMerged.bcgMatrixChart.margin.right),this.height-2*(this.graphDataMerged.bcgMatrixChart.margin.top+this.graphDataMerged.bcgMatrixChart.margin.bottom)]).padding(1.5),n=u(this.dataSet).sum(function(t){return t.rel_size}),a=this.root.append("g").attr("class","bubble-group").selectAll(".bubble").data(e(n).descendants()).enter().filter(function(t){return!t.children}).append("g").attr("class","bubble").on("mousemove",function(r){return t.eventsTooltip({data:r.data,isToShow:!0})}).on("mouseout",function(){return t.eventsTooltip({isToShow:!1})});a.filter(function(t){return t.r>0}).append("circle").attr("cx",function(r){return t.x(r.data.x_data)}).attr("cy",function(r){return t.y(r.data.y_data)}).attr("r",function(t){return t.r}).style("fill",function(e,n){return r.circularFind(t.graphData.colors,n)}).style("opacity",this.bubbleOptions.opacity),a.filter(function(t){return t.r>0}).append("rect").attr("width",function(r){return 2*r.r+t.bubbleOptions.padding}).attr("height",this.bubbleOptions.height).attr("x",function(r){return t.x(r.data.x_data)-r.r-t.bubbleOptions.padding/2}).attr("y",function(r){return t.y(r.data.y_data)-t.bubbleOptions.fontSize}).attr("stroke",function(e,n){return r.circularFind(t.graphData.colors,n)}).attr("stroke-width",1).attr("fill","#FFFFFF"),a.filter(function(t){return t.r>0}).append("text").attr("dx",function(r){return t.x(r.data.x_data)}).attr("dy",function(r){return t.y(r.data.y_data)}).style("text-anchor","middle").text(function(r,e){return t.graphData.labels[e]}).attr("font-size",this.bubbleOptions.fontSize).attr("fill","#000000")},t.prototype.eventsTooltip=function(t){this.tooltipEl&&(t.isToShow?this.tooltipEl.show(""+t.data.tooltipInfo,[e.event.pageX,e.event.pageY]):this.tooltipEl.hide())},t.prototype.eventsLegend=function(t){console.log(t)},t.prototype.render=function(){return o("div",{class:"o-layout"},o("div",{class:"o-layout--chart"},o("svg",{style:this.graphDataMerged.styles})),o("div",{class:"o-layout--slot"},o("slot",{name:"tooltip"}),o("slot",{name:"legend"})))},Object.defineProperty(t,"is",{get:function(){return"bcg-matrix-chart"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{bgcMatrixChartEl:{elementRef:!0},graphData:{type:"Any",attr:"graph-data"},updateGraphData:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".o-layout{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout,.o-layout--chart{width:100%}.is--vertical .o-layout--chart{width:90%}.o-layout--slot{width:100%}.is--vertical .o-layout--slot{width:10%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}bcg-matrix-chart .grid line,bcg-matrix-chart .quadrants line{stroke:#d3d3d3;stroke-opacity:.7;shape-rendering:crispEdges}bcg-matrix-chart .grid path,bcg-matrix-chart .quadrants path{stroke-width:0}bcg-matrix-chart .bubble text{cursor:default}"},enumerable:!0,configurable:!0}),t}();(function(t,r,e,n){var a,i=arguments.length,o=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,r,e,n);else for(var h=t.length-1;h>=0;h--)(a=t[h])&&(o=(i<3?a(o):i>3?a(r,e,o):a(r,e))||o);i>3&&o&&Object.defineProperty(r,e,o)})([i.resize()],O.prototype,"drawChart",null),t.BcgMatrixChart=O,Object.defineProperty(t,"__esModule",{value:!0})});