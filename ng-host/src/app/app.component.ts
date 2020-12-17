import {Component, OnInit} from '@angular/core';
import ReactComponent from '@lukasz-starosta/typescript-react-starter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-host';
  ngOnInit() {
    const root = document.getElementById('component-root');
    ReactComponent.mount(root);
  }
}
