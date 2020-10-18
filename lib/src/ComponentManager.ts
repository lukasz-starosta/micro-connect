type ICreateElement = (parentElement: HTMLElement) => void;

export interface IConstructorArgs {
  createElement: ICreateElement;
}

export default class ComponentManager {
  element: any = undefined;

  constructor({createElement}: IConstructorArgs) {
    this.mount(createElement)
  }

  mount(createElement: ICreateElement) {
    const root = document.getElementById('root');
    if (!root) {
      console.error('Could not find element with id root. Mounting aborted.');
      return;
    }

    createElement(root);
  }
}