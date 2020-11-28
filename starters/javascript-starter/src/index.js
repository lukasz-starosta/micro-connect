import {ComponentWrapper} from "@lukasz-starosta/micro-connect";
import {name, version} from '../package.json';

let element;

function buildElement() {
  element = document.createElement('p');
  element.innerText = `JavaScript Template`;
}

if (process.env.NODE_ENV === 'development') {
  buildElement();
  document.body.appendChild(element);
}

export default new ComponentWrapper({
  mountElement: (parentElement, props) => {
    buildElement();
    element.classList.add(props.rootClassName);
    element.id = props.id;
    parentElement.appendChild(element)
  },
  unmountElement: (parentElement => {
    parentElement.removeChild(element);
  }),
  name,
  version
})
