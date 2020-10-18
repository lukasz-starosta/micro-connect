import React from 'react';
import ReactDOM from 'react-dom';
import {ComponentManager, Component} from "@lukasz-starosta/micro-connect";

const StrictModeApp = () => {
  console.log('wuja')
  return <React.StrictMode>
    <Component src="/index.bundle.js"/>
  </React.StrictMode>
}

new ComponentManager({createElement: (parentElement: HTMLElement) => ReactDOM.render(<StrictModeApp />, parentElement)})
