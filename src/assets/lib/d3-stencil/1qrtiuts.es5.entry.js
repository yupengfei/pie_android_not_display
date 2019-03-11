D3Stencil.loadBundle("1qrtiuts",["exports","./chunk-3fb94679.js","./chunk-1fa210c9.js","./chunk-e7d195e0.js","./chunk-f7062f5a.js","./chunk-ef743929.js"],function(t,a,e,r,i,o){var n=window.D3Stencil.h,s=function(){function t(){}return t.prototype.componentWillLoad=function(){this.graphDataMerged=a.objectAssignDeep(Object.assign({},a.DEFAULT_GRAPH_DATA_BAR),this.graphData)},t.prototype.componentDidLoad=function(){this.svg=e.select(this.horizontalBarChartEl.getElementsByTagName("svg")[0]),this.height=this.svg.node().getBoundingClientRect().height-this.graphDataMerged.barChart.margin.top-this.graphDataMerged.barChart.margin.bottom,this.initSlots(),this.drawChart()},t.prototype.updateGraphData=function(t){this.graphDataMerged=a.objectAssignDeep(Object.assign({},a.DEFAULT_GRAPH_DATA_BAR),t),this.drawChart()},t.prototype.drawChart=function(){var t=this;if(this.hasData()){this.reSetRoot(),this.width=this.svg.node().getBoundingClientRect().width-this.graphDataMerged.barChart.margin.left-this.graphDataMerged.barChart.margin.right;var a=this.graphDataMerged.data,e=r.max(a,function(t){return t});this.x=r.linear().domain([0,100*Math.ceil(e/100)]).range([0,this.width]),this.y=r.band().domain(a.map(function(a,e){return""+t.graphDataMerged.labels[e]})).range([this.height,0]).padding(.1),this.drawAxis(),this.drawGrid(),this.drawBars()}},t.prototype.hasData=function(){return this.graphDataMerged.hasData(this.graphDataMerged)},t.prototype.reSetRoot=function(){this.root&&this.root.remove(),this.root=this.svg.append("g").attr("transform","translate("+this.graphDataMerged.barChart.margin.left+", "+this.graphDataMerged.barChart.margin.top+")")},t.prototype.initSlots=function(){this.tooltipEl=a.initTooltipIfExists(this.horizontalBarChartEl),this.legendEl=a.initLegendIfExists(this.horizontalBarChartEl,this.eventsLegend.bind(this))},t.prototype.drawAxis=function(){var t=this;this.graphDataMerged.barChart.axis.x.visible&&this.root.append("g").attr("class","x axis").attr("transform","translate(0, "+this.height+")").call(r.axisBottom(this.x).tickFormat(function(e){return a.formatter(t.graphDataMerged.barChart.axis.x.format,e,t.graphDataMerged.barChart.axis.x.currency)})),this.graphDataMerged.barChart.axis.y.visible&&this.root.append("g").attr("class","y axis").call(r.axisLeft(this.y))},t.prototype.drawGrid=function(){this.graphDataMerged.barChart.axis.x.gridVisible&&this.root.append("g").attr("class","grid").call(r.axisBottom(this.x).tickSize(this.height).tickFormat(function(){return""})),this.graphDataMerged.barChart.axis.y.gridVisible&&this.root.append("g").attr("class","grid").call(r.axisLeft(this.y).tickSize(-this.width).tickFormat(function(){return""}))},t.prototype.drawBars=function(){var t=this;this.root.append("g").attr("class","bar-group").selectAll(".bar").data(this.graphDataMerged.data).enter().filter(function(a){return t.x(a)>0}).append("rect").attr("class","bar").attr("x",0).attr("height",this.y.bandwidth()).attr("y",function(a,e){return t.y(""+t.graphDataMerged.labels[e])}).attr("width",function(a){return t.x(a)}).attr("fill",function(e,r){return a.circularFind(t.graphDataMerged.colors,r)}).on("mousemove",function(a,e){return t.eventsTooltip({data:a,index:e,isToShow:!0})}).on("mouseout",function(){return t.eventsTooltip({isToShow:!1})})},t.prototype.eventsTooltip=function(t){var r=t.index;this.tooltipEl&&(t.isToShow?this.tooltipEl.show(a.formatter(this.graphDataMerged.barChart.axis.x.format,t.data,this.graphDataMerged.barChart.axis.x.currency)+" <br/> "+this.graphDataMerged.labels[r],[e.event.pageX,e.event.pageY]):this.tooltipEl.hide())},t.prototype.eventsLegend=function(t){console.log(t)},t.prototype.render=function(){return n("div",{class:this.legendEl?"o-layout is--vertical":"o-layout"},n("div",{class:"o-layout--chart"},n("svg",{style:this.graphDataMerged.styles})),n("div",{class:"o-layout--slot"},n("slot",{name:"tooltip"}),n("slot",{name:"legend"})))},Object.defineProperty(t,"is",{get:function(){return"horizontal-bar-chart"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{graphData:{type:"Any",attr:"graph-data"},horizontalBarChartEl:{elementRef:!0},legendEl:{state:!0},tooltipEl:{state:!0},updateGraphData:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".o-layout{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout,.o-layout--chart{width:100%}.is--vertical .o-layout--chart{width:90%}.o-layout--slot{width:100%}.is--vertical .o-layout--slot{width:10%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}horizontal-bar-chart .grid line{stroke:#d3d3d3;stroke-opacity:.7;shape-rendering:crispEdges}horizontal-bar-chart .grid path{stroke-width:0}"},enumerable:!0,configurable:!0}),t}();(function(t,a,e,r){var i,o=arguments.length,n=o<3?a:null===r?r=Object.getOwnPropertyDescriptor(a,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(a,e,n):i(a,e))||n);o>3&&n&&Object.defineProperty(a,e,n)})([o.resize()],s.prototype,"drawChart",null),t.HorizontalBarChart=s,Object.defineProperty(t,"__esModule",{value:!0})});