import 'babel-polyfill'

import './estilos.css';
import {firstMessage, delayedMessage} from './message.js';


document.write(firstMessage);
delayedMessage();

console.log('Mensaje desde Webpack arhivo config');
