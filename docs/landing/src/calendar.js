import Calendar from '@lukasz-starosta/react-calendar';

const container = document.getElementById('react-calendar');
container.dataset.componentMeta = `${Calendar.name} | v${Calendar.version}`;

Calendar.mount(container, {rootClassName: 'calendar-root'});