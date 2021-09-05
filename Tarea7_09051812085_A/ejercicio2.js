function inventario(categoria) {
    const inventario = [{
        nombre: 'Mouse',
        precio: 150,
        categoria: "accesorios"
    },
    
    {
        nombre: 'teclado',
        precio: 123,
        categoria: "accesorios"
    },

    {
        nombre: 'audifonos',
        precio: 500,
        categoria: "accesorios"
    },

    {
        nombre: 'Lenovo',
        precio: 7000,
        categoria: "equipo"
    },

    {
        nombre: 'Acer',
        precio: 6000,
        categoria: "equipo"
    },

    {
        nombre: 'Asus',
        precio: 8000,
        categoria: "equipo"
    }
];


    totalPorCategoria = (inventario, categoria) => {
        let inventarioFiltrado = inventario.filter(function(item) {
            return item.categoria === categoria;
        });

        console.log("Inventario Seleccionado: " + inventarioFiltrado.map(a => a.nombre) + " categoria: " + categoria);

        let itemsCategoria = inventarioFiltrado.filter(function(item) {
            return item.precio > 0;
        });

        let preciosArreglo = itemsCategoria.map(a => a.precio);
        let precioTotal = preciosArreglo.reduce(function(a, b) { return a + b; });

        console.table("Precios Arreglo: " + preciosArreglo);
        console.table("Precio Total: " + precioTotal);
        document.getElementById('labelInventario').innerHTML = "Respuesta: " + precioTotal;
    }

    totalPorCategoria(inventario, categoria);
}
