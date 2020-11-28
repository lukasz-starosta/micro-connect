import {v4 as uuid} from 'uuid';

export interface IMountElementProps {
  rootClassName?: string;
  id: string;
}

export type IMountElement = (parentElement: HTMLElement, props: IMountElementProps) => void;
export type IUnmountElement = (parentElement: HTMLElement) => void;

export interface IConstructorArgs {
  mountElement: IMountElement;
  unmountElement: IUnmountElement;
  version: string;
  name: string;
}

export default class ComponentWrapper {
  uuid: string;

  private readonly mountElement: IMountElement;
  private readonly unmountElement: IUnmountElement;
  public name: string;
  public version: string;

  constructor({mountElement, unmountElement, name, version}: IConstructorArgs) {
    this.mountElement = mountElement;
    this.unmountElement = unmountElement;
    this.name = name;
    this.version = version;

    this.uuid = uuid();
  }

  mount(parentElement: HTMLElement, props?: IMountElementProps): void {
    if (!parentElement) {
      throw new Error('Could not find parentElement. Mounting aborted.');
    }

    this.mountElement(parentElement, {...props, id: this.uuid});
  }

  unmount(parentElement: HTMLElement) {
    this.unmountElement(parentElement);
  }
}
