import {ComponentWrapper} from "@lukasz-starosta/micro-connect";

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
  mountElement: (parentElement) => {
    buildElement();
    parentElement.appendChild(element)
  },
  unmountElement: (parentElement => {
    parentElement.removeChild(element);
  })
})
