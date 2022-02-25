import head_text from './head_text';

const Header = () => {
    const $el = document.createElement('h3');

    $el.innerText = head_text('Running through');

    return $el;
};

const $container = document.getElementById('app');

$container.appendChild(Header());
