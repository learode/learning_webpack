import _ from 'lodash';
import './header.css';
// inject a header element containing an p and h2 with some content
// from the title arg and using lodash

const header_injector = (title) => {
  const header_el = document.createElement('header');
  const h2_el = document.createElement('h2');
  const p_el = document.createElement('p');

  // using lodash join function to join the title.main and the below into a string seperated be space.
  h2_el.innerText = _.join([title.main, '|', 'Franclin', 'Muluh'], ' ');
  // putting the sub title to the p element
  p_el.innerText = title.sub;

  // add class main_header to header_el
  header_el.classList.add('main-header');

  // appending the html node element into the header parent
  header_el.appendChild(h2_el);
  header_el.appendChild(p_el);

  return header_el;
};

export default header_injector;
