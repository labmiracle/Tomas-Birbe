const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const prompt = readline.createInterface({ input, output });

async function game() {
	let gameFinished = false;
	let changeDifficulty = true;
	while (!gameFinished) {
		console.clear()
		console.log("Escribir 'exit' para salir o 'cambiar dificultad' para cambiar de dificultad")
		while (changeDifficulty) {
			difficultyResponse = await prompt.question(`Seleccionar dificultad 
1- Del 0 al 10
2- Del 0 al 50
3- Del 0 al 100
> `
			)

			switch (difficultyResponse) {
				case "1": {
					difficulty = 10
					changeDifficulty = false
					break
				}
				case "2": {
					difficulty = 50
					changeDifficulty = false
					break
				}
				case "3": {
					difficulty = 100
					changeDifficulty = false
					break
				}
				case 'exit': {
					gameFinished = true;
					changeDifficulty = false
					break
				}
				default: {
					console.log('Ingresar un numero del 1 al 3')
					changeDifficulty = true
					break
				}
			}
		}

		if (gameFinished) {
			prompt.close()
			break;
		}

		const guessResponse = await prompt.question(`Ingresa un nro del 1 al ${difficulty} \n> `)
		if (guessResponse === 'cambiar dificultad') {
			changeDifficulty = true
			continue;
		}
		if (guessResponse === 'exit') {
			gameFinished = true
			prompt.close()
		} else {
			const num = Number(guessResponse)

			if (num) {
				console.clear()
				const secretNumber = Math.round(Math.random() * difficulty)
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
