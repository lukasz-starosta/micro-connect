import Gantt from '@lukasz-starosta/js-gantt-0.1.1';

const container = document.getElementById('js-gantt');
container.dataset.componentMeta = `${Gantt.name} | v${Gantt.version}`;

Gantt.mount(container, {rootClassName: 'js-gantt'});