/*
 * Public API Surface of starter
 */
import {ComponentWrapper} from "@lukasz-starosta/micro-connect";

export * from './lib/starter.service';
export * from './lib/starter.component';
export * from './lib/starter.module';

export const AngularComponent = new ComponentWrapper({
  mountElement: (parentElement) => parentElement.appendChild(document.createElement('starter-component')),
  unmountElement: (parentElement => {console.info(`unmount from ${parentElement}`)})
})
