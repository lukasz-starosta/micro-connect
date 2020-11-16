import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */
import 'document-register-element';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {ComponentWrapper} from "@lukasz-starosta/micro-connect";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export default new ComponentWrapper({
  mountElement: (parentElement) => parentElement.appendChild(document.createElement('starter-component')),
  unmountElement: (parentElement => {
    parentElement.removeChild(parentElement.getElementsByTagName('starter-component')[0]);
  })
});
