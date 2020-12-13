import CardInput from '@lukasz-starosta/angular-card-input';
import Gantt, {centerGanttChart} from '@lukasz-starosta/js-gantt';

const detail = document.getElementById("detail");
const detailComponent = document.getElementById("detail-component");
const span = document.getElementsByClassName("close")[0];
const h3 = detail.getElementsByTagName('h3')[0];
const h4 = detail.getElementsByTagName('h4')[0];

let component;

const components = {
  'card-input': {component: CardInput},
  'gantt': {component: Gantt, afterMount: () => centerGanttChart(detailComponent)}
}

window.addEventListener('show-component', function (event) {
  const {title, date, component: componentName} = event.detail;
  // Don't mount the same element twice
  if (components[componentName] === component) return;

  clearDetail();

  h3.innerText = title || 'Event';
  h4.innerText = date ? `${date[0].toLocaleString()} - ${date[1].toLocaleString()}` : new Date().toLocaleDateString();

  const componentWrapper = components[componentName];
  component = componentWrapper && componentWrapper.component;

  if (!component) {
    closeDetail();
    throw new Error(`Component with name ${componentName} does not exist.`);
  }

  detailComponent.dataset.componentMeta = `${component.name} | v${component.version}`;
  detailComponent.classList.add('component');

  component.mount(detailComponent);
  detail.appendChild(detailComponent);

  detail.style.display = "block";

  if (componentWrapper.afterMount) {
    componentWrapper.afterMount();
  }
});

function clearDetail() {
  if (component) {
    component.unmount(detailComponent);
    component = null;
  }
}

function closeDetail() {
  detail.style.display = 'none';
}

span.onclick = function () {
  clearDetail();
  closeDetail();

  window.dispatchEvent(new CustomEvent('clear-selected-event'));
}
