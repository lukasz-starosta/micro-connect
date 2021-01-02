import Navbar from '@lukasz-starosta/js-navbar';

const navbarContainer = document.createElement('div');
navbarContainer.classList.add('component', 'component--navbar');
console.log(Navbar.version);
navbarContainer.dataset.componentMeta = `${Navbar.name} | v${Navbar.version}`;
document.body.insertAdjacentElement('afterbegin', navbarContainer);

Navbar.mount(navbarContainer);
