import React, { Component } from 'react';
import {Scatter, Bar, Line} from 'react-chartjs-2';
import * as moment from 'moment';



export default class GraficoDia  extends Component {
  constructor(props){
    super(props);
    
  }

  

    render() {
  const now = moment()
  const last2= moment().subtract(3, 'h'); 
  const diamin = moment().startOf('day')
  const diamax = moment().endOf('day')
  const data = {
  
  datasets: [
    {
     
      label: 'Con Dolor',
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
      data: this.props.chartDataUG
},
    {
     
      label: 'Sin Dolor',
      fill: false,
      backgroundColor: 'rgba(175,292,292,0.4)',
      pointBorderColor: 'rgba(175,292,292,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(175,292,292,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 8,
      pointHitRadius: 10,
      data: this.props.chartDataUS
},
 
    {
      
      label: 'Intervalo',
       fill: true,
      backgroundColor: 'rgba(275,192,192,0.4)',
      pointBorderColor: 'rgba(275,192,192,1)',
      pointBackgroundColor: 'rgba(275,192,192,0.4)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(275,192,192,1)',
      pointHoverBorderColor: 'rgba(120,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 8,
      pointHitRadius: 10,
      data: this.props.chartDataUI
}]
};

const data2 = {
  
  datasets: [
    {
       label: 'Con Dolor',
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
      data: this.props.chartData.grafico
},
    {
      
     label: 'Sin Dolor',
      fill: false,
      backgroundColor: 'rgba(175,292,292,0.4)',
      pointBorderColor: 'rgba(175,292,292,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(175,292,292,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 8,
      pointHitRadius: 10,
      data: this.props.chartData.sin
},
 
    {
      type:'line',
      label: 'Intervalo',
      
      backgroundColor: 'rgba(275,192,192,0.4)',
      pointBorderColor: 'rgba(275,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(275,192,192,1)',
      pointHoverBorderColor: 'rgba(120,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 8,
      pointHitRadius: 10,
      data: this.props.chartDataI
}]
};

return (        
      <div>            
         <Scatter data={data} options={{
        scales: {
            xAxes: [{
                
                  type: 'time',
                  

                  time: {       
                    
                    max:now
                    
                  },
                  ticks:{source:'data'}                                    
            }],
            yAxes: [{
            
            gridLines: {
              drawBorder: false,
              display: false,
              color: ['red', 'orange']
            },
            
            
            
          }]
        }
    }} />  
     <Line data={data2} options={{
        scales: {
            xAxes: [{
                
                  type: 'time',

                  time: {       
                    min:diamin,
                    max:diamax,
                    
                  },
                   

                                    
            }]
        }
    }} />       
      </div>
    );
  }
};
