import React, { Component } from 'react';

export default class Lista extends Component {
  render() {
    return (  <tr>
                <td>
                  {this.props.time}
                </td>        
                <td>
                  if (this.props.dolor==1){"si"}
                    else{"no"}
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

