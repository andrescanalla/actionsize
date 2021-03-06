import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Dia from "./Dia";

class Main extends Component {
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
    return (
      <main id="page-wrap">
          <Switch>          
              <Route exact path="/" render={(props) =><Home {...props} actions={this.state.actions} handleAddAction={this.handleAddAction} />} />
              <Route path="/dia" component={Dia} />        
          </Switch>
      </main>     
    );
  }
}



/* Main Component */
class Mainnn extends Component {

  constructor() {
  
    super();
    //Initialize the state in the constructor
    this.state = {
        products: [],
        currentProduct: null     
    
    }
     this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/actions')
        .then(response => {
            return response.json();
        })
        .then(products => {
            //Fetched product is stored in the state
            this.setState({ products });
        });
  }

 renderProducts() {
        const listStyle = {
            listStyle: 'none',
            fontSize: '18px',
            lineHeight: '1.8em',
        }
    return this.state.products.map(product => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li style={listStyle} onClick={
                () =>this.handleClick(product)} key={product.idaction} >
                { product.created_at } 
            </li>      
        );
    })
  }

  handleClick(product) {

      //handleClick is used to set the state
      this.setState({currentProduct:product});
  
  }

   handleAddProduct(product) {
     
    //product.price = Number(product.price);
    /*Fetch API for post request */
    fetch( '/api/actions', {
        method:'post',
        /* headers are important*/
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(product)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {
       
        this.setState((prevState)=> ({
            products: prevState.products.concat(data),
            currentProduct : data
        }))
    })
 //update the state of products and currentProduct
  }  
    
  render() {

   const mainDivStyle =  {
        display: "flex",
        flexDirection: "row"
    }
    
    const divStyle = {
       
        justifyContent: "flex-start",
        padding: '10px',
        width: '35%',
        background: '#f0f0f0',
        padding: '20px 20px 20px 20px',
        margin: '30px 10px 10px 30px'
        
    }

    

    return (
        

       
        <div >  
        
         <div style= {mainDivStyle}>
            
                <Product product={this.state.currentProduct} />
                <AddProduct onAdd={this.handleAddProduct} /> 
          </div>
      

         
              
        </div>
      
    );
  }
}

export default Main;

