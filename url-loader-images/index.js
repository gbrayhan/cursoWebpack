import './estilos.css';
import {messages} from './message.js';

import logo from './logo.png'


document.write(messages.firstMessage);
messages.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',logo);
img.setAttribute('height',40);
document.body.append(img);



console.log('Mensaje desde Webpack arhivo config');
