promedioArreglo = (array) => {
    var arreglo = array.split(",").map(Number);
    console.log("Arreglo inicial: " + arreglo);

    let cantidadItems = Number(arreglo.length);
    let totalSuma = arreglo.reduce((previous, current) => current += previous);
    let promedio = totalSuma / cantidadItems;

    console.log("Promedio del arreglo: " + promedio);
    document.getElementById('labelPromedio').innerHTML = "Respuesta: " + promedio;
}
