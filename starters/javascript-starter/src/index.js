import {ComponentWrapper} from "@lukasz-starosta/micro-connect";

function createElement() {
  const element = document.createElement('p');
  element.innerText = `JavaScript Template`;

  return element;
}

if (process.env.NODE_ENV === 'development') {
  document.body.appendChild(createElement());
}

export default new ComponentWrapper({
  mountElement: (parentElement) => parentElement.appendChild(createElement()),
  unmountElement: (parentElement => {
    console.info(`unmount from ${parentElement}`)
  })
})
