import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Component from '@lukasz-starosta/micro-connect';

const StrictModeApp =
  <React.StrictMode>
    <App/>
  </React.StrictMode>

new Component({createElement: (parentElement: HTMLElement) => ReactDOM.render(StrictModeApp, parentElement)})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
