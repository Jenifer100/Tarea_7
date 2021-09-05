function buscarPar(array) {
    let arreglo = array.split(",").map(Number);
    let sumaPar = document.getElementById('txtParSuma').value;

    console.log("Arreglo inicial: " + arreglo + " suma buscada: " + sumaPar);

    for (let value of arreglo) {
        for (let value2 of arreglo) {
            if (value != value2 && (arreglo[value] + arreglo[value2]) == sumaPar) {
                console.log("Primer Sumando: " + arreglo[value] + " Segundo Sumando: " + arreglo[value2]);
                document.getElementById('labelPar').innerHTML = "Primer Sumando: " + arreglo[value] + " Segundo sumando " + arreglo[value2];
            }
        }
    }
}
