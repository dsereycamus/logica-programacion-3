function solicitarNumeroYCalcularFactorial() {
    var numero = prompt('Ingrese un número entero:');
    
    if (numero === null || numero === "") {
        alert('Por favor, ingrese un número.');
        return;
    }

    // Verificar si el valor ingresado es un número entero
    if (!/^\d+$/.test(numero)) {
        alert('Por favor, ingrese un número entero válido.');
        return;
    }

    numero = parseInt(numero); // Convierte a número entero si es un número válido
    calcularFactorial(numero);
}

function calcularFactorial(numero) {
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    document.getElementById('textoResultado').innerHTML = `El factorial del número ${numero} es: ${resultado}`;
}
// function calcularFactorial(){

// var numero=document.getElementById('numeroIngresado').value;
// var resultado=1;
// for (var i=1; i<=numero; i++){
//     resultado=resultado*i;
// }
// document.getElementById('textoResultado').innerHTML= `El factorial del número $(numero) es: $(resultado)`;

// }

