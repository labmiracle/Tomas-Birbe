const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const prompt = readline.createInterface({ input, output });

async function game() {
	let gameFinished = false;

	while (!gameFinished) {
		const response = await prompt.question('Ingresa un nro del 1 al 10 \n> ')
		if (response === 'exit') {
			gameFinished = true
		} else {
			const num = Number(response)

			if (num) {
				console.clear()
				const secretNumber = Math.round(Math.random() * 10)
				if (num === secretNumber) {
					console.log('Acertaste!')
				} else {
					console.log(`Segui intentando! El numero era ${secretNumber}`)
				}
			} else {
				console.log('Tiene que ser un numero!')
			}

		}
	}
}

game()
