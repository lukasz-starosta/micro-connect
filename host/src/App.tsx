import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from "@lukasz-starosta/micro-connect";
import TestComponent from '@lukasz-starosta/typescript-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hosting app
        </p>
        <Component component={TestComponent}/>
      </header>
    </div>
  );
}

export default App;
