import {v4 as uuid} from 'uuid';

export type IMountElement = (parentElement: HTMLElement) => void;
export type IUnmountElement = (parentElement: HTMLElement) => void;

export interface IConstructorArgs {
  mountElement: IMountElement;
  unmountElement: IUnmountElement;
}

export default class ComponentWrapper {
  uuid: string;

  private readonly mountElement: IMountElement;
  private readonly unmountElement: IUnmountElement;

  constructor({mountElement, unmountElement}: IConstructorArgs) {
    this.mountElement = mountElement;
    this.unmountElement = unmountElement;

    this.uuid = uuid();
  }

  mount(parentElement: HTMLElement): void {
    if (!parentElement) {
      console.error('Could not find parentElement with id root. Mounting aborted.');
      return;
    }

    this.mountElement(parentElement);
  }

  unmount(parentElement: HTMLElement) {
    this.unmountElement(parentElement);
  }
}
