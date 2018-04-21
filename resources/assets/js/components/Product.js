import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Product = ({product}) => {
   
  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }

  //if the props for product is null, return Product doesn't exist
  if(!product) {

    return(<div style={divStyle}><h2>  No Product was selected </h2> </div>);
  }
    
  //Else, display the product data
  return(  
    <div style={divStyle}> 
      <h2> {product.title} </h2>
      <p> {product.created_at} </p>
      <h3> Tipo de contraccion: {product.dolor ? 'Con Dolor' : 'Sin Dolor'} </h3>
      <h3> Tipo de contraccion: {product.actividad ? 'En Actividad' : 'En Reposo'} </h3>
      <h3> Comentario : {product.comentario} </h3>
     
    </div>
  )
}

export default Product ;