import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'starter-component',
  template: `
    <button (click)="click()">Click {{num}}</button>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  public num: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  click() {
    this.num++;
  }
}
