import CardInput from '@lukasz-starosta/angular-card-input';

const detail = document.getElementById("detail");
const detailComponent = document.getElementById("detail-component");
const span = document.getElementsByClassName("close")[0];
const h3 = detail.getElementsByTagName('h3')[0];
const h4 = detail.getElementsByTagName('h4')[0];

const componentNameMap = {
  'card-input': CardInput
}

window.addEventListener('show-component', function(event) {
  const {title, date, component} = event.detail;
  h3.innerText = title || 'Event';
  h4.innerText = date ? `${date[0].toLocaleString()} - ${date[1].toLocaleString()}` : new Date().toLocaleDateString();

  const componentElement = componentNameMap[component];

  if (!componentElement) throw new Error(`Component with name ${component} does not exist.`);
  detailComponent.dataset.componentMeta = `${componentElement.name} | v${componentElement.version}`;
  detailComponent.classList.add('component');

  componentElement.mount(detailComponent);
  detail.appendChild(detailComponent);

  detail.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  detail.style.display = "none";
  const e = detail.getElementsByClassName('component')[0];
  detail.removeChild(e);
}
