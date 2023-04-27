function palabraMasLarga(str) {
	const palabras = str.split(' ')

	let palabraMasLarga = ''
	for (let palabra of palabras) {
		if (palabra.length >= palabraMasLarga.length) {
			palabraMasLarga = palabra
		}
	}

	return palabraMasLarga
}


function primeraMayuscula(str) {
	const palabras = str.split(' ')

	for (let i = 0; i < palabras.length; i++) {
		const [primeraLetra, ...resto] = palabras[i]
		palabras[i] = primeraLetra.toUpperCase() + resto.join('')
	}

	return palabras.join(' ')
}

console.log(primeraMayuscula('Erase una vez que se era'))
