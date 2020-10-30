import React from 'react';
import ReactDOM from 'react-dom';
import {ComponentWrapper} from "@lukasz-starosta/micro-connect";
import App from "./App";

const StrictModeApp = () => {
  return <React.StrictMode>
    <App/>
  </React.StrictMode>
}

ReactDOM.render(<StrictModeApp />, document.getElementById('root'));

export default new ComponentWrapper({
  mountElement: (parentElement: HTMLElement) => ReactDOM.render(<StrictModeApp/>, parentElement),
  unmountElement: (parentElement => {console.info(`unmount from ${parentElement}`)})
})