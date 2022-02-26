import content_injector from './branches/content_injector';
import header_injector from './branches/header_injector';
import img_injector from './branches/img_injector';

content = {
  title: {
    main: 'Content inject',
    sub: 'passed through arguments.',
  },
  body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, reprehenderit sint. Ad veritatis, debitis eos sit illum delectus aperiam eum vero non dolores veniam labore tempora officia iusto laudantium quam!',
};


// an immediately invoked function Expression to autorun
(() => {
  const container_el = document.getElementById('app');
  const right_el = document.createElement('article');
  const left_el = document.createElement('article');

  right_el.appendChild(img_injector);
  left_el.appendChild(header_injector(content.title));
  left_el.appendChild(content_injector(content.body));

  container_el.appendChild(right_el);
  container_el.appendChild(left_el);

  return container_el;
})();
