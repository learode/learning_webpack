const content_injector = (content) => {
  const p_el = document.createElement('p');

  p_el.innerText = content;

  return p_el;
};

export default content_injector;
