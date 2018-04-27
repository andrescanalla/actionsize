import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import {scaleRotate as Menu } from 'react-burger-menu'


class Header extends Component {

  constructor() {
  
    super();
    //Initialize the state in the constructor
    this.state = {        
         menuOpen: false    
    }
     
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

 // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

 // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }
 
  render() {  
    return (      
        
            <Menu  isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                
                  <Link onClick={() => this.closeMenu()} to="/"><i className="fa fa-fw fa-star"></i><span>Home</span></Link>
                  <Link onClick={() => this.closeMenu()} to="/dia"><i className="fa fa-fw fa-chart-bar"></i><span>Dia</span></Link>
                  <Link onClick={() => this.closeMenu()} to="/semana"><i className="fa fa-fw fa-chart-bar"></i><span>Semana</span></Link>
                  <Link onClick={() => this.closeMenu()} to="/datos"><i className="fa fa-fw fa-newspaper"></i><span>Datos</span></Link>
                
            </Menu>        
           
    );
  }
}

export default Header;



