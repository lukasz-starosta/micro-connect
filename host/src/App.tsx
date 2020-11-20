import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from "@lukasz-starosta/micro-connect";
import TSReactComponent from '@lukasz-starosta/typescript-react-starter';
import JSComponent from '@lukasz-starosta/javascript-starter';
import AngularComponent from '@lukasz-starosta/angular-starter';

function App() {
  const [shown, setShown] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hosting app
        </p>
        <button onClick={() => setShown(!shown)}>Show/Hide</button>

        <div>
          <h2>React</h2>
          {shown &&
          <>
            <Component component={TSReactComponent}/>
            <Component component={TSReactComponent}/>
          </>}
        </div>
        <div>
          <h2>JavaScript</h2>
          {shown &&
          <>
            <Component component={JSComponent}/>
            <Component component={JSComponent}/>
          </>
          }
        </div>
        <div>
          <h2>Angular</h2>
          {shown &&
          <>
            <Component component={AngularComponent}/>
            <Component component={AngularComponent}/>
          </>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
