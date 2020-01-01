// import _ from 'lodash';
import './style.scss';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = "Hello Webpack Hi";
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = Icon;

    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());
