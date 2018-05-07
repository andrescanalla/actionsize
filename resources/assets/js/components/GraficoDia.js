import React, { Component } from 'react';
import {Scatter, Bar} from 'react-chartjs-2';


export default class GraficoDia  extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:this.props.chartData
    }
  }

    render() { 
  
  const data2 = {
  labels: this.state.chartData.label,
  datasets: [
    {
      label: 'Con Dolor',
      backgroundColor: 'rgba(200,19,532,0.2)',
      borderColor: 'rgba(200,19,532,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(200,19,532,0.4)',
      hoverBorderColor: 'rgba(200,19,532,1)',
      data: this.state.chartData.dolor,
    },
    {
      label: 'Sin Dolor',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: this.state.chartData.sinDolor,
    }    
  ]
};
   
  const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 8,
      pointHitRadius: 10,
      data: [this.props.chartData]
}]};

return (        
      <div>            
         <Scatter data={data} options={{
        scales: {
            xAxes: [{
                
                  type: 'time',
                  
            }]
        }
    }} />      
        
      </div>
    );
  }
};
