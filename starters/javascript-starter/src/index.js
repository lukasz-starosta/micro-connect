import {ComponentWrapper} from "@lukasz-starosta/micro-connect";
import {name, version} from '../package.json';

function buildElement() {
  const newElement = document.createElement('p');
  newElement.innerText = `JavaScript Template`;

  return newElement;
}

const element = buildElement();

if (process.env.NODE_ENV === 'development') {
  document.body.appendChild(element);
}

export default new ComponentWrapper({
  mountElement: (parentElement, props) => {
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
