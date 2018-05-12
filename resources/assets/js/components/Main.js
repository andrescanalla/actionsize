import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Semana from "./Semana";

class Main extends Component {
  constructor() {  
    super();
    //Initialize the state in the constructor
    this.state = {
        actions: [], 
        chartDataS:{},
        chartDataD:{}
               
    }
    this.handleAddAction = this.handleAddAction.bind(this);     
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
   componentDidMount(){
    this.getChartDataS();
   }

   componentWillMount() {
    
     this.getActions();
     this.getChartDataD();
  }

  getActions(){
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

  getChartDataS(){
    /* fetch API in action */
    fetch('graficosemana')
        .then(response => {
            return response.json();
        })
        .then(chartDataS => {
            //Fetched product is stored in the state
            this.setState({ chartDataS });
        });
   }

   getChartDataD(){
    /* fetch API in action */
    fetch('graficodia')
        .then(response => {
            return response.json();
        })
        .then(chartDataD => {
            //Fetched product is stored in the state
            this.setState({ chartDataD });
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
   this.getChartDataD();
   this.getActions();
  }  

  render() {
    return (
      <main id="page-wrap">
          <Switch>          
              <Route exact path="/" render={(props) =><Home {...props} 
              actions={this.state.actions} 
              chartDataDGrafico={this.state.chartDataD.grafico} 
              chartDataDIntervalo={this.state.chartDataD.intervalo} 
              chartData={this.state.chartDataD} 
              chartDataUG={this.state.chartDataD.graficoU}
              chartDataUS={this.state.chartDataD.sinU} 
              chartDataUI={this.state.chartDataD.intervaloU} 
              handleAddAction={this.handleAddAction} />} />
              <Route path="/semana" component={Semana} />        
          </Switch>
      </main>     
    );
  }
}




export default Main;

