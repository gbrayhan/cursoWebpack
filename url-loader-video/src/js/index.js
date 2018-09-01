import '../css/estilos.css';
import {messages} from './message.js';

import logo from '../images/logo.png'
import videoPlatzi from '../video/que-es-core.mp4';


document.write(messages.firstMessage);
messages.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',logo);
img.setAttribute('height',40);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src',videoPlatzi);
video.setAttribute('height',480);
video.setAttribute('autoplay',true);
video.setAttribute('controls',true);

document.body.append(video);



console.log('Mensaje desde Webpack arhivo config');
