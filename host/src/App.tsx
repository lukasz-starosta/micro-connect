import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from "@lukasz-starosta/micro-connect";
import TSReactComponent from '@lukasz-starosta/typescript-react-starter';
//@ts-ignore TODO: solve
import JSComponent from '@lukasz-starosta/javascript-starter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hosting app
        </p>
        <Component component={TSReactComponent}/>
        <Component component={JSComponent}/>
      </header>
    </div>
  );
}

export default App;
