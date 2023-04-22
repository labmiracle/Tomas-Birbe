function addOnlyNums(...args) {
	let total = 0

	for (let arg of args) {
		// IsNaN es un valor falsy, por eso no es necesario comprobarlo en la condicion. Pero se podria hacer !IsNaN(Number(arg))
		if (Number(arg)) {
			total += arg
		}
	}

	return total
}

console.log(addOnlyNums(1, 2, 3, 8))
