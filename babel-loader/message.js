import {renderToDOM} from './render-to-dom.js';

const waitTime = new Promise((todoOk, todoMal) => {
	setTimeout(() => {
		todoOk('Han pasado 3 segundos, omg');
	}, 3000)
});


const messages = {
	firstMessage: "Hola mundo desde un modulo",
	delayedMessage: async () => {
		const message = await waitTime;
		console.log(message);
		const element = document.createElement ('p');
		element.textContent = message;
		renderToDOM(element);
	}
};

export {messages};
