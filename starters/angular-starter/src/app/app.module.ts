import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';

import {createCustomElement} from "@angular/elements";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define("starter-component", element);
  }
}

