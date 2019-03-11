const t=window.D3Stencil.h;import{g as a,q as e,l as s,i as r,j as i,k as h}from"./chunk-6e0c6752.js";import{a as o,b as l}from"./chunk-d9a959cc.js";import{a as d}from"./chunk-696ad60d.js";import{b as g,c as p}from"./chunk-66d0b61c.js";class n{componentWillLoad(){this.graphDataMerged=a(Object.assign({},e),this.graphData)}componentDidLoad(){this.svg=o(this.pieChartEl.getElementsByTagName("svg")[0]),this.height=this.svg.node().getBoundingClientRect().height,this.initSlots(),this.drawChart()}updateGraphData(t){this.graphDataMerged=a(Object.assign({},e),t),this.drawChart()}drawChart(){if(this.hasData()){this.width=this.svg.node().getBoundingClientRect().width,this.radius=Math.min(this.width,this.height)/2,this.reSetRoot();const t=g().innerRadius(0).outerRadius(this.radius);this.pie=this.root.selectAll(".arc").data(p().sort(null).value(t=>t)(this.graphDataMerged.data)).enter().append("g").attr("class","arc"),this.pie.append("path").attr("d",t).attr("stroke","#FFF").attr("fill",(t,a)=>s(this.graphDataMerged.colors,a)).on("mousemove",t=>this.eventsTooltip({data:t,isToShow:!0})).on("mouseout",()=>this.eventsTooltip({isToShow:!1})),this.createLabels()}}hasData(){return this.graphDataMerged.hasData(this.graphDataMerged)}reSetRoot(){this.root&&this.root.remove(),this.root=this.svg.append("g").attr("transform",`translate(${this.width/2}, ${this.height/2})`)}initSlots(){this.tooltipEl=r(this.pieChartEl),this.legendEl=i(this.pieChartEl,this.eventsLegend.bind(this))}createLabels(){this.labelArc=g().innerRadius(this.radius-40).outerRadius(this.radius-40),this.pie.append("text").attr("transform",t=>`translate(${this.labelArc.centroid(t)})`).attr("dy","0.35em").text((t,a)=>h(this.graphDataMerged.pieChart.labelFormat,this.graphDataMerged.labels[a],this.graphDataMerged.pieChart.currency))}eventsTooltip({data:t,isToShow:a}){this.tooltipEl&&(a?(()=>{this.tooltipEl.show(`${h(this.graphDataMerged.pieChart.dataFormat,t.data,this.graphDataMerged.pieChart.currency)} <br/>\n        ${h(this.graphDataMerged.pieChart.labelFormat,this.graphDataMerged.labels[t.index],this.graphDataMerged.pieChart.currency)}`,[l.pageX,l.pageY])})():(()=>this.tooltipEl.hide())())}eventsLegend(t){const a=this.graphDataMerged.labels,e=this.graphDataMerged.data,s=a.filter(a=>a!==t.label),r=e.filter((a,e)=>e!==t.index);a.length===s.length?(this.graphDataMerged.labels=this.graphData.labels,this.graphDataMerged.data=this.graphData.data,this.graphDataMerged.colors=this.graphData.colors,this.updateGraphData(this.graphDataMerged)):(this.graphDataMerged.labels=s,this.graphDataMerged.data=r,this.graphDataMerged.colors.splice(t.index,1),this.updateGraphData(this.graphDataMerged))}render(){return t("div",{class:this.legendEl?"o-layout is--vertical":"o-layout"},t("div",{class:"o-layout--chart"},t("svg",{style:this.graphDataMerged.styles})),t("div",{class:"o-layout--slot"},t("slot",{name:"tooltip"}),t("slot",{name:"legend"})))}static get is(){return"pie-chart"}static get properties(){return{graphData:{type:"Any",attr:"graph-data"},legendEl:{state:!0},pieChartEl:{elementRef:!0},tooltipEl:{state:!0},updateGraphData:{method:!0}}}static get style(){return".o-layout{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout,.o-layout--chart{width:100%}.is--vertical .o-layout--chart{width:90%}.o-layout--slot{width:100%}.is--vertical .o-layout--slot{width:10%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}pie-chart .arc text{font:.625rem sans-serif;text-anchor:middle;cursor:default}"}}!function(t,a,e,s){var r,i=arguments.length,h=i<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,a,e,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(h=(i<3?r(h):i>3?r(a,e,h):r(a,e))||h);i>3&&h&&Object.defineProperty(a,e,h)}([d()],n.prototype,"drawChart",null);export{n as PieChart};