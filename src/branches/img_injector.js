import img_source from './../../asset/public/assasin.jpg';
import './img.css';

// function to inject an img element containing an image
const img_injector = () => {
  // create a new img element and assign to img_el
  const img_el = new Image();

  // add class name img_side to the img_el
  img_el.classList.add('img-side');

  // assign the src attribute of the img_el to the img_source
  img_el.src = img_source;

  return img_el;
};

export default img_injector;
