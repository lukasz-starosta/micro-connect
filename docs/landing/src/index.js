import './index.css';
import Navbar from '@lukasz-starosta/js-navbar';

const navbarContainer = document.createElement('div');
navbarContainer.classList.add('component');
document.body.appendChild(navbarContainer);

Navbar.mount(navbarContainer);

