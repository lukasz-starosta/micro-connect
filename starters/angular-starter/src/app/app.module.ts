import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';

import {StarterModule} from "../../projects/starter/src/lib/starter.module";
import {createCustomElement} from "@angular/elements";
import {StarterComponent} from "../../projects/starter/src/lib/starter.component";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StarterModule
  ],
  providers: [],
  entryComponents: [StarterComponent],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const element = createCustomElement(StarterComponent, {injector: this.injector})
    customElements.define("starter-component", element);
  }
}

