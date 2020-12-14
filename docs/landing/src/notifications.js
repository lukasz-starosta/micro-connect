import NotificationsContainer from '@lukasz-starosta/react-notifications';
import '../node_modules/react-toastify/dist/ReactToastify.min.css';

const container = document.getElementById('notifications-container');

NotificationsContainer.mount(container, {rootClassName: 'component'});

// target Toastify container
container.children[0].addEventListener('DOMNodeInserted', (e) => {
  // attach proper attributes to show on hover
  e.target.dataset.componentMeta = `${NotificationsContainer.name} | v${NotificationsContainer.version}`
});