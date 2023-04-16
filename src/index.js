import menuDis from './menu';
import contactDis from './contact';
import homeDis from './home';

const content = document.getElementById('content');

//selectors
const navCont = document.createElement('div');
const homeBtn = document.createElement('p');
const menuBtn = document.createElement('p');
const contactBtn = document.createElement('p');

const mainCont = document.createElement('div');
const paras = document.createElement('p');

//styles
navCont.style =
  'display: flex; justify-content: space-around; font-size: 2rem;';

mainCont.style =
  'border: 1px solid; height: 50vh; width: 40vw; margin: 0 auto;';
mainCont.appendChild(paras);

homeBtn.innerHTML = 'Home';
menuBtn.innerHTML = 'Menu';
contactBtn.innerHTML = 'Contact';

const navs = () => {
  navCont.appendChild(homeBtn);
  navCont.appendChild(menuBtn);
  navCont.appendChild(contactBtn);

  content.appendChild(navCont);
  content.appendChild(mainCont);
};

const display = (text) => {
  return (paras.innerHTML = text);
};

navs();
display('Lorem ipsum --Home!');

//listeners
homeBtn.addEventListener('click', homeDis);
menuBtn.addEventListener('click', menuDis);
contactBtn.addEventListener('click', contactDis);

export default display;
