function palabraMasLarga(str) {
	const words = str.split(' ')

	let largestWord = ''
	for (let word of words) {
		if (word.length >= largestWord.length) {
			largestWord = word
		}
	}

	return largestWord
}
