import React, { Component } from 'react';
import GraficoSemana from "./GraficoSemana";
import AddAction from "./AddAction";

class Semana extends Component {
  constructor() {  
    super();
    //Initialize the state in the constructor
    this.state = {
        actions: []          
    }
    this.handleAddAction = this.handleAddAction.bind(this);     
  }

   /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('dia')
        .then(response => {
            return response.json();
        })
        .then(actions => {
            //Fetched product is stored in the state
            this.setState({ actions });
        });
  }

  handleAddAction(action) {
     
    //product.price = Number(product.price);
    /*Fetch API for post request */
    fetch( '/api/actions', {
        method:'post',
        /* headers are important*/
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(action)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {
       
        this.setState((prevState)=> ({
            actions: prevState.actions.concat(data),
            //currentProduct : data
        }))
    })
 //update the state of products and currentProduct
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
									 <AddAction onAdd={this.handleAddAction} /> 
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
									{this.state.actions.map(action =>
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
									 <h2>Ultimos 7 Dias</h2>
								</div>
								<div className="panel-body">
										<GraficoSemana />									
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