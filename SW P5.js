const numeros = [10, 20, 30, 40, 50];

const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log("La suma del arreglo es:", suma);