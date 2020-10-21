import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from "@lukasz-starosta/micro-connect";
// TODO: add proper types
// @ts-ignore
import TestComponent from 'typescript-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hosting app
        </p>
        <Component component={{} as any}/>
      </header>
    </div>
  );
}

export default App;
