import {v4 as uuid} from 'uuid';
import ComponentManager from "./ComponentManager";

export type IMountElement = (parentElement: HTMLElement) => void;
export type IUnmountElement = (parentElement: HTMLElement) => void;

export interface IConstructorArgs {
  mountElement: IMountElement;
  unmountElement: IUnmountElement;
}

export default class ComponentWrapper {
  uuid: string;

  private componentManager: ComponentManager = ComponentManager.getInstance();

  private readonly mountElement: IMountElement;
  private readonly unmountElement: IUnmountElement;

  constructor({mountElement, unmountElement}: IConstructorArgs) {
    this.mountElement = mountElement;
    this.unmountElement = unmountElement;

    this.uuid = uuid();
  }

  mount(element: HTMLElement): void {
    if (!element) {
      console.error('Could not find element with id root. Mounting aborted.');
      return;
    }

    this.componentManager.registerComponent(this);

    this.mountElement(element);
  }
}
