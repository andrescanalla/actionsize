import React, { Component } from 'react';
import {Scatter, Bar} from 'react-chartjs-2';


export default class GraficoDia  extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

   componentWillMount(){
    this.getChartData();
  }

   getChartData(){
    /* fetch API in action */
    fetch('graficosemana')
        .then(response => {
            return response.json();
        })
        .then(chartData => {
            //Fetched product is stored in the state
            this.setState({ chartData });
        });
   }

  render() { 
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
      data: this.state.chartData
    }
  ]
};  

const data2 = {
  labels: this.state.chartData.label,
  datasets: [
    {
      label: 'Dolor',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: this.state.chartData.dolor,
    },
    {
      label: 'Sin Dolor',
      backgroundColor: 'rgba(155,99,132,0.2)',
      borderColor: 'rgba(155,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(155,99,132,0.4)',
      hoverBorderColor: 'rgba(1S55,99,132,1)',
      data: this.state.chartData.sinDolor,
    }
    
  ]
  
    
  

};

       return (
        
      <div>
        
         
            
         <Bar data={data2} options={{
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }} />      
        
      </div>
    );
  }
};
