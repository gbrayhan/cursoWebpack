const waitTime = new Promise((todoOk, todoMal) => {
	setTimeout(() => {
		todoOk('Han pasado 3 segundos, omg');
	}, 3000)
});


var messages  = {
	firstMessage: "Hola mundo desde un modulo",
	delayedMessage: async () => {
		const message = await waitTime;
		console.log(message);
	}
};


export {messages};