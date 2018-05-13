import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Semana extends Component {
  constructor(props) {  
    super(props);      
    }    

  render() {
    const data2 = {
  labels: this.props.chartDataS.label,
  datasets: [
    {
      label: 'Con Dolor',
      backgroundColor: 'rgba(200,19,532,0.2)',
      borderColor: 'rgba(200,19,532,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(200,19,532,0.4)',
      hoverBorderColor: 'rgba(200,19,532,1)',
      data: this.props.chartDataS.dolor,
    },
    {
      label: 'Sin Dolor',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: this.props.chartDataS.sinDolor,
    }    
  ]
};
    return (<div>					
    					<div className="col-md-12">						
    						<div className="col-md-8" style={{height:900}}>
    							<div className="panel panel-success">
    								<div className="panel-heading">
    									 <h2>Ultimos 7 Dias</h2>
    								</div>
    								<div className="panel-body">
    										<div>           
                           <Bar 
                              data={data2}
                              options={{
                                scales: {
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
    								</div>
    							</div>
    						</div>
    					</div>
					 </div>
					);
	}
}
    export default Semana;


class Lista extends Component {
  render() {
   var dolor;   
    if(this.props.dolor==1){ 
    	dolor="Si"
    }
    else{
    	dolor="No"
    }

    var actividad;   
    if(this.props.actividad==1){ 
    	actividad="Si"
    }
    else{
    	actividad="No"
    }
    
    return (  <tr>
                <td>
                  {this.props.time}
                </td>        
                <td>
                   {dolor}
                </td> 
                <td>
                  {actividad}
                </td>
                <td>
                  {this.props.comentario}
                </td>     
            </tr>);
  }
}