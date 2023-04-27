function onlyUniques(...args) {
	const uniquesArgs = new Set(args)

	// Se retorna como un arreglo en lugar de un Set para cumplir con la consigna
	return [...uniquesArgs]
}
