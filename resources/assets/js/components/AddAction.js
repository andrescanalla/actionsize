import React, { Component } from 'react';

class AddAction extends Component {

  constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          newAction: {             
              dolor: false,
              actividad: false,
              comentario: '- -'             
          },
          checkboxState: false,
          checkboxState1: false,
        }
    
    //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggle = this.toggle.bind(this);
  }

   
  /* callback to change the checkboxState to false when the checkbox is checked */
  toggle(key, e) {
    /*Duplicating and updating the state */
    var state = Object.assign({}, this.state.newAction); 
    state[key] = e.target.value;
    this.setState({newAction: state });

     {console.log(this.state.newAction)};

     this.setState({
      checkboxState: !this.state.checkboxState
    });
   {console.log(this.state.newAction)};
  }

  /* callback to change the checkboxState to false when the checkbox is checked */
  toggle1(key, e) {
    /*Duplicating and updating the state */
    var state = Object.assign({}, this.state.newAction); 
    state[key] = e.target.value;
    this.setState({newAction: state });

     {console.log(this.state.newAction)};

     this.setState({
      checkboxState1: !this.state.checkboxState1
    });
   {console.log(this.state.newAction)};
  }
  
  /* This method dynamically accepts inputs and stores it in the state */
  handleInput(key, e) {
    
    /*Duplicating and updating the state */
    var state = Object.assign({}, this.state.newAction); 
    state[key] = e.target.value;
    this.setState({newAction: state });
     {console.log(this.state.newAction)};
  }
 /* This method is invoked when submit button is pressed */
  handleSubmit(e) {
     {console.log(this.state.newAction)};
    //preventDefault prevents page reload   
    e.preventDefault();
    /*A call back to the onAdd props. The control is handed over
     *to the parent component. The current state is passed 
     *as a param
     */
     
    this.props.onAdd(this.state.newAction);
     {console.log(this.state.newAction)};
  }

  veri(vari) {
    if (vari) {
      return 0;
    } else {
      return 1;
    }
}


  

  render() {     

    return(
      <div> 
       
        <div> 
         <h2> Add new Action </h2>
        {/*when Submit button is pressed, the control is passed to 
         *handleSubmit method 
         */}
        <form onSubmit={this.handleSubmit}>
          <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
              <div className="form-group">
                <label> 
                  Dolor: 
                 </label>
                  {/*On every keystroke, the handeInput method is invoked */}
                  <input  className="form-control" type="checkbox" value={this.veri(this.state.checkboxState)} onClick={(e)=>this.toggle('dolor',e)} />
                  <label> 
                  Actividad: 
                </label>
                  <input  className="form-control" type="checkbox" value={this.veri(this.state.checkboxState1)} onClick={(e)=>this.toggle1('actividad',e)}  />
              </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
              <div className="form-group">
               <label>
            Comentario:
          </label>
          <input className="form-control" type="text" onChange={(e)=>this.handleInput('comentario', e)}/>
                
              </div>
          </div>
          
         
          

          <input className="form-control" type="submit" value="Submit" />
        </form>
     
      </div>
    </div>)
  }
}

export default AddAction;
  