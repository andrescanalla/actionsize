import React, { Component } from 'react';

class AddAction extends Component {

  constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          newAction: {
              idaction:100,
              dolor: true,
              actividad: true,
              comentario: 'haa'             
          },
          checkboxState: false
        }
    
    //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggle = this.toggle.bind(this);
  }

   
  /* callback to change the checkboxState to false when the checkbox is checked */
  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }
  /* This method dynamically accepts inputs and stores it in the state */
  handleInput(key, e) {
    
    /*Duplicating and updating the state */
    var state = Object.assign({}, this.state.newAction); 
    state[key] = e.target.value;
    this.setState({newAction: state });
  }
 /* This method is invoked when submit button is pressed */
  handleSubmit(e) {
    //preventDefault prevents page reload   
    e.preventDefault();
    /*A call back to the onAdd props. The control is handed over
     *to the parent component. The current state is passed 
     *as a param
     */
    this.props.onAdd(this.state.newAction);
  }


  

  render() { 
  
  const checkedOrNot = [];
    checkedOrNot.push(
      <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
    );

  var msg;
    if (this.state.checkboxState) {
      msg = 1;
    } else {
      msg = 0;
    }

    return(
      <div> 
       
        <div> 
         <h2> Add new Action </h2>
        {/*when Submit button is pressed, the control is passed to 
         *handleSubmit method 
         */}
        <form onSubmit={this.handleSubmit}>
         
          <label> 
            Dolor: 
            {/*On every keystroke, the handeInput method is invoked */}
            <input  type="checkbox" onClick={this.toggle} />
             <input   type="hidenn" value={this.state.checkboxState} onChange={(e)=>this.handleInput('actividad',e)} />
          </label>
          
          <label> 
            Actividad: 
            <input   type="checkbox" onChange={(e)=>this.handleInput('actividad',e)} />
          </label>
          
          <label>
            Comentario:
            <input  type="text" onChange={(e)=>this.handleInput('comentario', e)}/>
          </label>

          <input  type="submit" value="Submit" />
        </form>
        {checkedOrNot}
      </div>
    </div>)
  }
}

export default AddAction;
  