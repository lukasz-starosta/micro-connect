import TSReactComponent from '@lukasz-starosta/typescript-react-starter';
import JSComponent from '@lukasz-starosta/javascript-starter';
import AngularComponent from '@lukasz-starosta/angular-starter';

TSReactComponent.mount(document.getElementById('app'), {rootClassName: 'component'});
JSComponent.mount(document.body, {rootClassName: 'component'});
AngularComponent.mount(document.body, {rootClassName: 'component'});
