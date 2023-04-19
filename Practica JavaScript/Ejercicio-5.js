function camelize(str) {
	const words = str.split(' ')

	const wordsCamelized = []

	for (let i = 0; i < words.length; i++) {
		const [firstLetter, ...rest] = words[i]
		const restWord = rest.join('')
		if (i === 0) {
			wordsCamelized.push(words[i].toLowerCase())
		} else {
			wordsCamelized.push(firstLetter.toUpperCase() + restWord.toLowerCase())
		}

	}

	return wordsCamelized.join('')
}

console.log(camelize('Hola me llamo Tomas'))
