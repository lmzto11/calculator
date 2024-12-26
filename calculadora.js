// calculadora.js

document.addEventListener('DOMContentLoaded', function() {
    function obtenerValores() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        return { num1, num2 };
    }

    function mostrarResultado(resultado) {
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    }

    function sumar() {
        const { num1, num2 } = obtenerValores();
        const resultado = num1 + num2;
        mostrarResultado(resultado);
    }

    function restar() {
        const { num1, num2 } = obtenerValores();
        const resultado = num1 - num2;
        mostrarResultado(resultado);
    }

    function multiplicar() {
        const { num1, num2 } = obtenerValores();
        const resultado = num1 * num2;
        mostrarResultado(resultado);
    }

    function dividir() {
        const { num1, num2 } = obtenerValores();
        if (num2 !== 0) {
            const resultado = num1 / num2;
            mostrarResultado(resultado);
        } else {
            mostrarResultado('Error: División por cero');
        }
    }

    function reiniciar() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('resultado').innerText = '';
    }

    document.getElementById('sumar').addEventListener('click', sumar);
    document.getElementById('restar').addEventListener('click', restar);
    document.getElementById('multiplicar').addEventListener('click', multiplicar);
    document.getElementById('dividir').addEventListener('click', dividir);
    document.getElementById('reiniciar').addEventListener('click', reiniciar);
});