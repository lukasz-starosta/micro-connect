import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from "@lukasz-starosta/micro-connect";
// import TSReactComponent from '@lukasz-starosta/typescript-react-starter';
// import JSComponent from '@lukasz-starosta/javascript-starter';
// @ts-ignore
import { AngularComponent } from '@lukasz-starosta/angular-starter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hosting app
        </p>
        {/*<Component component={TSReactComponent}/>*/}
        {/*<Component component={JSComponent}/>*/}
        <Component component={AngularComponent}/>
      </header>
    </div>
  );
}

export default App;
