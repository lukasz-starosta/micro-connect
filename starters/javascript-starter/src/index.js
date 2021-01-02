import {ComponentWrapper} from "@lukasz-starosta/micro-connect";
import {name, version} from '../package.json';

export default new ComponentWrapper({
  mountElement: (parentElement, props) => {
    const element = buildElement();
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
