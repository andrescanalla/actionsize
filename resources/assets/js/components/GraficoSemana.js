import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class GraficoSemana extends Component {
 
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
    }}/>              
      </div>
    );
  }
};


export default GraficoSemana;

