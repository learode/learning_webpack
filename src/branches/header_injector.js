import _ from 'lodash';

// inject a header element containing an p and h2 with some content
// from the title arg and using lodash

const header_injector = (title) => {
  const header_el = document.createElement('header');
  const h2_el = document.createElement('h2');
  const p_el = document.createElement('p');

  h2_el.innerText = _.join([title.main, '|', 'Franclin', 'Muluh'], ' ');
  p_el.innerText = title.sub;

  header_el.appendChild(h2_el);
  header_el.appendChild(p_el);

  return header_el;
};

export default header_injector;
