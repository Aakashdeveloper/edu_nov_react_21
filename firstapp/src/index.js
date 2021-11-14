import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii From React</h1>
            <h2>React App</h2>
            <div></div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))

/*
var React = require('react');
var ReactDOM = require('react-dom');

function Abc(){
    return(
        <h1>Hii From React</h1>
    ) 
}

ReactDOM.render(<Abc/>,document.getElementById('root'))
*/