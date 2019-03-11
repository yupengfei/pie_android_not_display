const t=window.D3Stencil.h;import{g as a,o as e,p as r,i,j as s,k as h,l as n}from"./chunk-6e0c6752.js";import{a as o,b as l}from"./chunk-d9a959cc.js";import{f as g,a as d,b as p,c,d as m}from"./chunk-e5eef6f6.js";import"./chunk-1767601e.js";import{a as D}from"./chunk-696ad60d.js";import{a as u}from"./chunk-66d0b61c.js";class C{lineChartRenderedHandle(){this.lineChartAreReady()}componentWillLoad(){this.graphDataMerged=a(Object.assign({},e),this.graphData)}updateGraphData(t){this.graphDataMerged=a(Object.assign({},e),t),this.lineChartEl.updateGraphData(this.graphDataMerged),this.drawChart()}lineChartAreReady(){this.lineChartEl=this.lineAnnotationsChartEl.getElementsByTagName("line-chart")[0],this.svg=o(this.lineChartEl.getElementsByTagName("svg")[0]),this.height=this.svg.node().getBoundingClientRect().height-this.graphDataMerged.lineChart.margin.top-this.graphDataMerged.lineChart.margin.bottom,this.svg.style("height",this.svg.node().getBoundingClientRect().height+this.graphDataMerged.lineAnnotationsChart.increaseHeight),this.drawChart()}drawChart(){if(this.hasData()){this.reSetRoot(),this.width=this.svg.node().getBoundingClientRect().width-this.graphDataMerged.lineChart.margin.left-this.graphDataMerged.lineChart.margin.right;const t=this.graphDataMerged.data,a=t.reduce((t,a)=>t=[...t,...a],[]);this.x=g().domain(a).range(a.map((a,e)=>e*(this.width/(t[0].length-1)))),this.repositionXAxis(),this.drawAnnotations()}}hasData(){return this.graphDataMerged.hasData(this.graphDataMerged)}reSetRoot(){this.root=o(this.lineAnnotationsChartEl.getElementsByTagName("line-chart")[0].children[0]),this.annotationsGroup&&this.annotationsGroup.remove()}repositionXAxis(){this.root.selectAll(".x text").attr("dy",this.graphDataMerged.lineAnnotationsChart.tickSeparation),this.root.selectAll(".x.axis-label").attr("dy","1em")}drawAnnotations(){const t=this.x.range();this.annotationsGroup=this.root.select("g").append("g").attr("transform",`translate(0, ${this.height})`).attr("class","annotations-group"),this.root.select(".annotations-group").selectAll(".annotation").data(this.graphDataMerged.lineAnnotationsChart.annotations).enter().append("g").attr("transform",(a,e)=>`translate(${t[e]}, 0)`).attr("class","annotation").attr("data",(a,e)=>t[e]).filter(t=>t.length>0).append("svg:image").attr("y",7).attr("x",-7).attr("width",t=>t.length>1?20:17).attr("height",t=>t.length>1?20:17).attr("xlink:href",t=>t.length>1?this.graphDataMerged.lineAnnotationsChart.imagePathSomeAnnotations:this.graphDataMerged.lineAnnotationsChart.imagePathOneAnnotation).on("mouseover",()=>this.strokedashAnnotations(!0)).on("mouseleave",()=>this.strokedashAnnotations())}strokedashAnnotations(t=!1){const a=o(l.target).node().parentNode.attributes.data.nodeValue,e=["style","stroke: #0283B0; stroke-width: 3"],r=["stroke-dasharray","5,5"];t?this.root.select(".grid[text-anchor~=middle]").append("line").attr("class","strokedash").attr("x1",a).attr("y1",0).attr("x2",a).attr("y2",this.height).attr(e[0],e[1]).attr(r[0],r[1]):this.root.select(".strokedash").remove()}render(){return t("line-chart",{graphData:this.graphDataMerged})}static get is(){return"line-annotations-chart"}static get properties(){return{graphData:{type:"Any",attr:"graph-data"},lineAnnotationsChartEl:{elementRef:!0},updateGraphData:{method:!0}}}static get listeners(){return[{name:"lineChartRendered",method:"lineChartRenderedHandle"}]}static get style(){return".o-layout{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout,.o-layout--chart{width:100%}.is--vertical .o-layout--chart{width:90%}.o-layout--slot{width:100%}.is--vertical .o-layout--slot{width:10%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}line-annotations-chart .annotations-group .annotation{cursor:pointer}"}}!function(t,a,e,r){var i,s=arguments.length,h=s<3?a:null===r?r=Object.getOwnPropertyDescriptor(a,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,a,e,r);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(h=(s<3?i(h):s>3?i(a,e,h):i(a,e))||h);s>3&&h&&Object.defineProperty(a,e,h)}([D()],C.prototype,"drawChart",null);class x{componentWillLoad(){this.graphDataMerged=a(Object.assign({},r),this.graphData)}componentDidLoad(){this.svg=o(this.lineChartEl.getElementsByClassName("line-chart")[0]),this.height=this.svg.node().getBoundingClientRect().height-this.graphDataMerged.lineChart.margin.top-this.graphDataMerged.lineChart.margin.bottom,this.tooltipEl=i(this.lineChartEl),this.legendEl=s(this.lineChartEl,this.eventsLegend.bind(this)),this.drawChart(),this.handleOnRenderized()}updateGraphData(t){this.graphDataMerged=a(Object.assign({},r),t),this.drawChart()}drawChart(t){if(this.reSetRoot(),this.width=this.svg.node().getBoundingClientRect().width-this.graphDataMerged.lineChart.margin.left-this.graphDataMerged.lineChart.margin.right,this.hasData()&&t){this.x=g().domain(t.labels).range(t.range);const a=this.graphDataMerged.data,e=a.reduce((t,a)=>[...t,...a],[]);this.y=d().domain([0,p(e,t=>t)]).range([this.height,0]);const r=g().domain(e).range(e.map((t,e)=>e*(this.width/(a[0].length-1))));this.line=u().x((t,a)=>r(a)).y(t=>this.y(t)),this.drawAxis(),this.drawAxisLabels(),this.drawGrid(),this.drawLines(),this.drawDots(r)}return{width:this.width,graphData:this.graphDataMerged}}hasData(){return this.graphDataMerged.hasData(this.graphDataMerged)}reSetRoot(){this.root&&this.root.remove(),this.root=this.svg.append("g").attr("transform",`translate(${this.graphDataMerged.lineChart.margin.left}, ${this.graphDataMerged.lineChart.margin.top})`)}drawAxis(){this.graphDataMerged.lineChart.axis.x.visible&&this.root.append("g").attr("class","x axis").attr("transform",`translate(0, ${this.height})`).call(c(this.x).tickFormat(t=>h(this.graphDataMerged.lineChart.axis.x.format,t,this.graphDataMerged.lineChart.axis.x.currency))),this.graphDataMerged.lineChart.axis.y.visible&&this.root.append("g").attr("class","y axis").call(m(this.y).tickFormat(t=>h(this.graphDataMerged.lineChart.axis.y.format,t,this.graphDataMerged.lineChart.axis.y.currency)))}drawAxisLabels(){""!==this.graphDataMerged.lineChart.axis.x.label&&this.root.append("text").attr("class","x axis-label").attr("transform",`translate(${this.width/2}, ${this.height+2*this.graphDataMerged.lineChart.margin.top})`).text(this.graphData.lineChart.axis.x.label),""!==this.graphDataMerged.lineChart.axis.y.label&&this.root.append("text").attr("class","y axis-label").attr("transform","rotate(-90)").attr("y",0-this.graphDataMerged.lineChart.margin.left).attr("x",0-this.height/2).attr("dy","1em").text(this.graphData.lineChart.axis.y.label)}drawGrid(){this.graphDataMerged.lineChart.axis.x.gridVisible&&this.root.append("g").attr("class","grid").call(c(this.x).tickSize(this.height).tickFormat(()=>"")),this.graphDataMerged.lineChart.axis.y.gridVisible&&this.root.append("g").attr("class","grid").call(m(this.y).tickSize(-this.width).tickFormat(()=>""))}drawLines(){this.root.append("g").attr("class","lines").selectAll(".line-group").data(this.graphDataMerged.data).enter().append("g").attr("class",(t,a)=>`line-group line-group-${a}`).append("path").attr("class","line").style("stroke",(t,a)=>n(this.graphDataMerged.colors,a)).attr("d",this.line)}drawDots(t){this.root.selectAll(".line-group").append("g").attr("class","dots-group").style("fill",(t,a)=>n(this.graphDataMerged.colors,a)).selectAll(".dots-group").data((t,a)=>this.graphDataMerged.data[a]).enter().append("circle").attr("class","dot").attr("cx",(a,e)=>t(e)).attr("cy",t=>this.y(t)).attr("r",5).on("mouseover",(t,a)=>this.eventsTooltip({data:t,index:a,isToShow:!0})).on("mouseout",()=>this.eventsTooltip({isToShow:!1}))}handleOnRenderized(){this.lineChartRendered.emit()}eventsTooltip({data:t,index:a,isToShow:e}){this.tooltipEl&&(e?(()=>{this.tooltipEl.show(`${h(this.graphDataMerged.lineChart.axis.y.format,t,this.graphDataMerged.lineChart.axis.y.currency)} <br/> ${h(this.graphDataMerged.lineChart.axis.x.format,this.graphDataMerged.labels[a],this.graphDataMerged.lineChart.axis.x.currency)}`,[l.pageX,l.pageY])})():(()=>this.tooltipEl.hide())())}eventsLegend(t){const a=o(`.line-group-${t.index}`);a.classed("line-group__inactive",!a.classed("line-group__inactive"))}render(){return t("div",{class:"o-layout"},t("div",{class:"o-layout--chart"},t("svg",{style:this.graphDataMerged.styles,class:"line-chart"})),t("div",{class:"o-layout--slot"},t("slot",{name:"tooltip"}),t("slot",{name:"legend"})))}static get is(){return"line-chart"}static get properties(){return{graphData:{type:"Any",attr:"graph-data"},lineChartEl:{elementRef:!0},updateGraphData:{method:!0}}}static get events(){return[{name:"lineChartRendered",method:"lineChartRendered",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".o-layout{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout,.o-layout--chart{width:100%}.is--vertical .o-layout--chart{width:90%}.o-layout--slot{width:100%}.is--vertical .o-layout--slot{width:10%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}line-chart .axis text{font:.65rem sans-serif}line-chart .axis-label{text-anchor:middle;font:1rem sans-serif}line-chart .grid line{stroke:#d3d3d3;stroke-opacity:.7;shape-rendering:crispEdges}line-chart .grid path{stroke-width:0}line-chart .line-group{-webkit-transition:opacity .5s linear;transition:opacity .5s linear}line-chart .line-group__inactive{opacity:0}line-chart .line-group .line{fill:none;stroke-width:3}line-chart .line-group .dot{stroke:#fff}"}}!function(t,a,e,r){var i,s=arguments.length,h=s<3?a:null===r?r=Object.getOwnPropertyDescriptor(a,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,a,e,r);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(h=(s<3?i(h):s>3?i(a,e,h):i(a,e))||h);s>3&&h&&Object.defineProperty(a,e,h)}([D({axisData:!0})],x.prototype,"drawChart",null);export{C as LineAnnotationsChart,x as LineChart};