import React, { Component } from 'react';
import Modal from 'react-modal';

class AddAction extends Component {

  constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          newAction: {             
              dolor: false,
              actividad: false,
              idaction: '',
              hora:'',
              intevalo:''             
          },
          checkboxState: false,
          checkboxState1: false,
          modalIsOpen: false
        }
    
    //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggle = this.toggle.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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


 openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    
    this.handleSubmit();
    this.setState({modalIsOpen: false});
  }


  

  render() {     

    return(
      <div>       
        <div> 
         <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6"><h2>Listado</h2></div> 
          <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
            <button onClick={this.openModal} style={{marginTop:  20}} className="btn btn-info" > Add new Action </button></div>
         </div>
       <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{
                  content : {
                    top                   : '25%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',                   
                    transform             : 'translate(-50%, -50%)'
                  }
          }}>
<div className="panel panel-success">
  <div className="panel-heading"> Add New Action</div>
  <div className="panel-body">
        <div className="row">
        <form onSubmit={this.handleSubmit}>        
          <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
              <div className="form-group">
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                <label> 
                  Dolor: 
                 
                  {/*On every keystroke, the handeInput method is invoked */}
                  <input  className="form-control" type="checkbox" value={this.veri(this.state.checkboxState)} onClick={(e)=>this.toggle('dolor',e)} />
                  </label>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <label> 
                  Actividad: 
                
                  <input  className="form-control" type="checkbox" value={this.veri(this.state.checkboxState1)} onClick={(e)=>this.toggle1('actividad',e)}  />
                  </label>
                  </div>
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
          <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
              <input className="form-control" type="button" value="New Action" onClick={this.handleSubmit , this.closeModal}/>       
          </div>
             
        </form>
        </div> 
        </div> 
        </div> 
        </Modal>    
        </div>
      </div>
    )
  }
}
Modal.setAppElement('#root')
export default AddAction;
  