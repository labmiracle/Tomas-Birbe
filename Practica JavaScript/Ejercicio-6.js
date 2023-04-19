const carrito = {
	productos: [{
		nombre: 'papel higienico',
		unidades: 4,
		precio: 5
	},
	{
		nombre: 'chocolate',
		unidades: 2,
		precio: 1.5
	}],
	get precioTotal() {
		let accum = 0
		for (let producto of this.productos) {
			accum += producto.unidades * producto.precio
		}
		return accum

		/* 
			Utilizando metodos de arreglos:
			
			return this.productos
				.reduce((total, producto) => total + (producto.precio * producto.unidades), 0)
		*/
	}
}
