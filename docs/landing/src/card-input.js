import AngularCardInput from '@lukasz-starosta/angular-card-input';

const container = document.getElementById('angular-card-input');
container.dataset.componentMeta = `${AngularCardInput.name} | v${AngularCardInput.version}`;

AngularCardInput.mount(container);
