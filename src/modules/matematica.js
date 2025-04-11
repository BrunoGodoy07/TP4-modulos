const PI = 3.14159;

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: división por cero';

module.exports = {
  PI,
  sumar,
  restar,
  multiplicar,
  dividir
};
