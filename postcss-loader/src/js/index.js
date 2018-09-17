import '../css/estilos.css';
import {messages} from './message.js';

import logo from '../images/logo.png';
import data from './teachers.json';
import {renderToDOM} from './render-to-dom.js';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Teachers} from './teachers.js';

import '../css/main.less';




render(<Teachers data={data}/>, document.getElementById('container'));


console.log(data);
data.teachers.forEach((teacher) => {
	const element = document.createElement('li');
	element.textContent = teacher.name;
	renderToDOM(element);

});


document.write(messages.firstMessage);
messages.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',logo);
img.setAttribute('height',40);
document.body.append(img);



console.log('Mensaje desde Webpack arhivo config');
