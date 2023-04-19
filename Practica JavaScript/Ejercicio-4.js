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

	const palabrasEnMayuscula = []

	for (let palabra of palabras) {
		const [primeraLetra, ...resto] = palabra
		palabrasEnMayuscula.push(primeraLetra.toUpperCase() + resto.join(''))
	}

	return palabrasEnMayuscula.join(' ')
}
