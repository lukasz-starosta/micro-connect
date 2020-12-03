import Gantt from '@lukasz-starosta/js-gantt';

const container = document.getElementById('js-gantt');
container.dataset.componentMeta = `${Gantt.name} | v${Gantt.version}`;

Gantt.mount(container, {rootClassName: 'js-gantt'});