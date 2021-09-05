arreglopotencia = (array) => {
    var arr = array.split(",")
    console.log("Arreglo inicial: " + arr);

    var arrpotencia = arr.map(function(numero) {
        if (numero > 0) {
            return numero * numero;
        } else {
            return numero;
        }

    });
    console.log("Numeros elevados al cuadrado: " + arrpotencia);
    document.getElementById('labelArreglo').innerHTML = "Respuesta: " + arrpotencia;
}
