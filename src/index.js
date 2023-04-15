import menuDis from './menu.js';
import contactDis from './contact.js';

const content = document.getElementById('content');

export const navs = () => {
  const navContainer = document.createElement('div');
  const home = document.createElement('p');
  const menu = document.createElement('p');
  const contact = document.createElement('p');

  home.innerHTML = '<a href="#">Home</a>';
  menu.innerHTML = '<a href="#">Menu </a>';
  contact.innerHTML = '<a href="#">Contact </a>';

  navContainer.appendChild(home);
  navContainer.appendChild(menu);
  navContainer.appendChild(contact);

  content.appendChild(navContainer);

  // styles

  navContainer.style =
    'display: flex; justify-content: space-around; width: 90vw; margin: 0 auto;';
  home.addEventListener('click', () => {
    alert('Welcome to home!');
  });

  menu.addEventListener('click', menuDis);
  contact.addEventListener('click', contactDis);
};

export const display = (text) => {
  const mainContent = document.createElement('div');
  const para = document.createElement('p');
  para.innerHTML = text;
  mainContent.style =
    'width: 802px; height: 70vh; border: 1px solid; margin: 0 auto; margin-top: 50px;';

  mainContent.appendChild(para);
  content.appendChild(mainContent);
};

navs();
display('Lorem ipsum --Home');
