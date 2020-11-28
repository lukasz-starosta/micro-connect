import React from 'react';
import ReactDOM from 'react-dom';
import {ComponentWrapper} from "@lukasz-starosta/micro-connect";
import App from "./App";
import {IMountElementProps} from "@lukasz-starosta/micro-connect";
import {name, version} from '../package.json';

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<App/>, document.getElementById('root'));
}

export default new ComponentWrapper({
  mountElement: (parentElement: HTMLElement, props: IMountElementProps) => {
    ReactDOM.render(<App className={props.rootClassName} id={props.id}/>, parentElement);
  },
  unmountElement: (parentElement => {
    ReactDOM.unmountComponentAtNode(parentElement);
  }),
  name,
  version
})
