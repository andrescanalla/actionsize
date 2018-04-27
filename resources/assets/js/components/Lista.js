import React, { Component } from 'react';

export default class Lista extends Component {
  render() {
    return (  <tr>
                <td>
                  {this.props.time}
                </td>        
                <td>
                  {this.props.dolor}
                </td> 
                <td>
                  {this.props.actividad}
                </td>
                <td>
                  {this.props.comentario}
                </td>     
            </tr>);
  }
}

