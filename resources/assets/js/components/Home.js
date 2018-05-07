import React, { Component } from 'react';
import GraficoDia from "./GraficoDia";
import AddAction from "./AddAction";

class Home extends Component {
  constructor(props) {  
    super(props);
    //Initialize the state in the constructor
    this.state = props
               
    
   }  

  render() {
    return (<div>
					<h1 style={{margin:"-10px 0px 30px 0px"}}>
						Action size
					</h1>
					<div className="col-md-12">
						<div className="col-md-4">
							<div className="panel panel-success">
								<div className="panel-heading">									 
									 <AddAction onAdd={this.props.handleAddAction} /> 
									 <h2>Listado</h2>
								</div>
							<div className="panel-body">
								<table className="table table-striped table-condensed table-hover dataTable">
									<thead style={{background:"#A9D0F5"}}>
										<tr>
											<th>Hora</th>	
											<th>Dolor</th>	
											<th>Actividad</th>	
											<th>Comentario</th>	
										</tr>
									</thead>
									<tbody>
									{this.props.actions.map(action =>
										<Lista 
											key={action.idaction}
											time={action.created_at}
											dolor={action.dolor}
											actividad={action.actividad}
											comentario={action.comentario}
											/>)}
									</tbody>
								</table>
							</div>
							</div>
						</div>
						<div className="col-md-8" style={{height:900}}>
							<div className="panel panel-success">
								<div className="panel-heading">
									 <h2>Intervalo Diario</h2>
								</div>
								<div className="panel-body">
										<GraficoDia chartData={this.props.chartDataD}/>									
								</div>
							</div>
						</div>
					</div>
					</div>
					);
	}
}
    export default Home;


const Homes = ({actions, handleAddAction}) => <div>
					<h1 style={{margin:"-10px 0px 30px 0px"}}>
						Action size
					</h1>
					<div className="col-md-12">
						<div className="col-md-4">
							<div className="panel panel-success">
								<div className="panel-heading">									 
									 <AddAction onAdd={handleAddAction} /> 
									 <h2>Listado</h2>
								</div>
							<div className="panel-body">
								<table className="table table-striped table-condensed table-hover dataTable">
									<thead style={{background:"#A9D0F5"}}>
										<tr>
											<th>Hora</th>	
											<th>Dolor</th>	
											<th>Actividad</th>	
											<th>Comentario</th>	
										</tr>
									</thead>
									<tbody>
									{actions.map(action =>
										<Lista 
											key={action.idaction}
											time={action.created_at}
											dolor={action.dolor}
											actividad={action.actividad}
											comentario={action.comentario}
											/>)}
									</tbody>
								</table>
							</div>
							</div>
						</div>
						<div className="col-md-8" style={{height:900}}>
							<div className="panel panel-success">
								<div className="panel-heading">
									 <h2>Intervalo Diario</h2>
								</div>
								<div className="panel-body">
										<GraficoDia actions={actions}/>									
								</div>
							</div>
						</div>
					</div>
					</div>;



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