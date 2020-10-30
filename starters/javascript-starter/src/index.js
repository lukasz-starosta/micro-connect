import { ComponentWrapper } from "@lukasz-starosta/micro-connect";

const element = document.createElement('p');
element.innerText = 'JavaScript Template';

document.body.appendChild(element);

export default new ComponentWrapper({
  mountElement: (parentElement) => parentElement.appendChild(element),
  unmountElement: (parentElement => {console.info(`unmount from ${parentElement}`)})
})
