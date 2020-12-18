import {Component, OnInit} from '@angular/core';
import ReactComponent from '@lukasz-starosta/typescript-react-starter';
import AngularComponent from '@lukasz-starosta/angular-starter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-host';
  ngOnInit() {
    const reactRoot = document.getElementById('react-component-root');
    ReactComponent.mount(reactRoot);
    const angularRoot = document.getElementById('angular-component-root');
    AngularComponent.mount(angularRoot);
  }
}
