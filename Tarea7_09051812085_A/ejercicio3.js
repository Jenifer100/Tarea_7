oracion = (oracion) => {
    console.log("La oración es: " + oracion);


    let oracionUpper = oracion.toLowerCase()
        .trim()
        .split(' ')
        .map(v => v[0].toUpperCase() + v.substr(1))
        .join(' ');

        
    console.table("Oracion modificada con Expresion Regular: " + oracion.replace(/\b\w/g, l => l.toUpperCase()));
    console.table("Oracion modificada sin Expresion Regular: " + oracionUpper);

    document.getElementById('labelOracion').innerHTML = "Resultado: " + oracionUpper;
}
