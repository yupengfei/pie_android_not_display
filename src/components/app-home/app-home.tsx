import { Component } from '@stencil/core';
// import {  GraphData, Formats } from 'd3-stencil';

 
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
   PIE_CHART_DATA = {
    pieChart: {
      labelFormat: 'ANY',
      dataFormat: 'GROUPED_TWO_DIGITS',
    },
    styles: {
      width: '100%',
      height: '500px',
      margin: '20px 0',
    },
    colors: [
      '#98abc5',
      '#8a89a6',
      '#7b6888',
      '#6b486b',
      '#a05d56',
      '#d0743c',
      '#ff8c00',
    ],
    labels: ['<5', '5-13', '14-17', '18-24', '25-44', '45-64', '≥65'],
    data: [2704659, 4499890, 2159981, 3853788, 16106543, 8819342, 612463],
  };

  
  render() {
    return (
      <div>dd
<pie-chart graphData={this.PIE_CHART_DATA} />
</div>
    );
      // <ion-header>
      //   <ion-toolbar color="primary">
      //     <ion-title>Home</ion-title>
      //   </ion-toolbar>
      // </ion-header>,

      // <ion-content padding>
      //   <p>
      //     Welcome to the PWA Toolkit. You can use this starter to build entire
      //     apps with web components using Stencil and ionic/core! Check out the
      //     README for everything that comes in this starter out of the box and
      //     check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
      //   </p>

      //   <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>

    //   </ion-content>
    // ];
  }
}
