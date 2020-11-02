import {ComponentWrapper} from "@lukasz-starosta/micro-connect";

function createElement() {
  const element = document.createElement('button');
  element.innerText = `0`;
  element.onclick = () => {
    let n = parseInt(element.innerText)
    element.innerText = (++n).toString();
  }

  return element;
}

export default new ComponentWrapper({
  mountElement: (parentElement) => parentElement.appendChild(createElement()),
  unmountElement: (parentElement => {
    console.info(`unmount from ${parentElement}`)
  })
})
