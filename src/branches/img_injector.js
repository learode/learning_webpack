import img_source from './../../asset/public/assasin.jpg';

// function to inject an img element containing an image
const img_injector = () => {
  // create a new img element and assign to img_el
  const img_el = new Image();

  img_el.src = img_source;

  return img_el;
};

export default img_injector;
