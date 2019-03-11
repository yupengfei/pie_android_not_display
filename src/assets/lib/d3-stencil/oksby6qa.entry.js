const e=window.D3Stencil.h;import{g as t,n as a,l}from"./chunk-6e0c6752.js";import{a as s,b as n}from"./chunk-d9a959cc.js";class r{constructor(){this.labelLegendPosition=0}componentWillLoad(){this.legendDataMerged=t(Object.assign({},a),this.legendData)}componentDidLoad(){this.svg=s(this.legendEl.getElementsByTagName("svg")[0]),"horizontal"===this.legendDataMerged.type?this.drawHorizontalLegend():this.drawVerticalLegend()}callOnClick(e){this._callOnClick=e}drawHorizontalLegend(){const e=this.svg.selectAll(".legend").data(this.legendDataMerged.labels).enter().append("g").attr("class","legend");e.append("circle").attr("cx",10).attr("cy",5).attr("r",7).style("fill",(e,t)=>l(this.legendDataMerged.colors,t)).style("stroke",(e,t)=>l(this.legendDataMerged.colors,t)).on("click",(e,t)=>this.handleOnClick(e,t)),e.append("text").attr("x",20).attr("y",10).text(e=>e),e.attr("transform",(t,a)=>this.makeTransformTranslate(e,a))}drawVerticalLegend(e=20){const t=this.svg.selectAll(".legend").data(this.legendDataMerged.labels).enter().append("g").attr("class","legend").attr("transform",(t,a)=>`translate(0, ${a*e})`);t.append("circle").attr("cx",10).attr("cy",10).attr("r",7).style("fill",(e,t)=>l(this.legendDataMerged.colors,t)).style("stroke",(e,t)=>l(this.legendDataMerged.colors,t)).on("click",(e,t)=>this.handleOnClick(e,t)),t.append("text").attr("x",20).attr("y",15).text(e=>e)}makeTransformTranslate(e,t,a=20){let l=0;return 0===t?this.labelLegendPosition=e.nodes()[t].getBBox().width+a:(l=this.labelLegendPosition,this.labelLegendPosition+=e.nodes()[t].getBBox().width+a),`translate(${l}, 5)`}handleOnClick(e,t){const a=s(n.target),l=s(n.target.nextSibling);return a.classed("is__inactive",!l.classed("is__inactive")),l.classed("is__inactive",!l.classed("is__inactive")),this._callOnClick({label:e,index:t})}render(){return e("svg",{class:"legend",style:this.legendDataMerged.styles})}static get is(){return"legend-chart"}static get properties(){return{callOnClick:{method:!0},legendData:{type:"Any",attr:"legend-data"},legendEl:{elementRef:!0}}}static get style(){return".o-layout{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout,.o-layout--chart{width:100%}.is--vertical .o-layout--chart{width:90%}.o-layout--slot{width:100%}.is--vertical .o-layout--slot{width:10%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}legend-chart .legend circle{cursor:pointer;stroke-width:2px}legend-chart .legend circle.is__inactive{fill:#fff!important}legend-chart .legend text{text-anchor:start;font-size:15px}legend-chart .legend text.is__inactive{text-decoration:line-through}"}}export{r as LegendChart};