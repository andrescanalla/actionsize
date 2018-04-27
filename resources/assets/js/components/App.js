import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main";
import Header from "./Header";


const App = () => (
    <div id="outer-container" style={{height:'100%'}}>
        <Header />        
        <Main />        
    </div>
);




export default App;

