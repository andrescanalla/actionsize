import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
  datasets: [
    {
      label: 'Con Dolor',
      backgroundColor: 'rgba(200,19,532,0.2)',
      borderColor: 'rgba(200,19,532,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(200,19,532,0.4)',
      hoverBorderColor: 'rgba(200,19,532,1)',
      data: [15, 29, 60, 11, 26, 95, 10]
    },
    {
      label: 'Sin Dolor',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class GraficoSemana extends Component {
 
  render() {
    return (
      <div>
       
        <Bar
          data={data}
          width={5}
          height={400}
          options={{
            maintainAspectRatio: false , scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
          }}
        />
      </div>
    );
  }
}

export default GraficoSemana;

