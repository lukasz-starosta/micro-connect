import Calendar from '@lukasz-starosta/react-calendar';

const container = document.getElementById('app-calendar');
container.dataset.componentMeta = `${Calendar.name} | v${Calendar.version}`;

Calendar.mount(container);