function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
	const alturaPorDia = velocidadCrecimiento - velocidadDecrecimiento
	return alturaDeseada / alturaPorDia
}

console.log(calcularDiasCrecimiento(7, 2, 15))
console.log(calcularDiasCrecimiento(7, 2, 5))
console.log(calcularDiasCrecimiento(7, 2, 7))
