/*
  Ejercicios de tipos de datos
  Segun el siguien objeto

   imprimir en consola:
  1. El nombre de la segunda fruta
  2. El precio de la uva
  3. El valor "Grande" de la sandia
  4. El nombre del segundo elemento de charcuteria

  opcional:
  1. El precio total de las frutas
  2. El precio total de la charcuteria
  3. El precio total de la compra
  
*/

var compras = {
    frutas: [
      {
        nombre: 'Manzana',
        tipos: ['Roja', 'Verde'],
        cantidad: 2,
        precio: 5
      },
      {
        nombre: 'Pera',
        cantidad: 3,
        precio: 6
      },
      {
        nombre: 'Uva',
        tipos: ['Verde', 'Morada'],
        cantidad: 1,
        precio: 10
      },
      {
        nombre: 'Sandia',
        cantidad: 1,
        precio: 20,
        tamaños: ['Grande', 'Mediana', 'Pequeña']
      }
    ],
    charcuteria: [
      {
        nombre: 'Jamón',
        cantidad: 1,
        precio: 100
      },
      {
        nombre: 'Salchichón',
        cantidad: 2,
        precio: 50
      }
    ]
};

// 1. El nombre de la segunda fruta
console.log(compras.frutas[1].nombre);

// 2. El precio de la uva
console.log(compras.frutas[2].precio);

// 3. El valor "Grande" de la sandia
console.log(compras.frutas[3].tamaños[0]);

// 4. El nombre del segundo elemento de charcuteria
console.log(compras.charcuteria[1].nombre);

// Opcional:

// 1. El precio total de las frutas
let totalFrutas = compras.frutas[0].precio + compras.frutas[1].precio + compras.frutas[2].precio + compras.frutas[3].precio;
console.log(totalFrutas);

// 2. El precio total de la charcuteria
let totalCharcuteria = compras.charcuteria[0].precio+compras.charcuteria[1].precio;
console.log(totalCharcuteria);

// 3. El precio total de la compra
let totalCompra = totalFrutas + totalCharcuteria;
console.log(totalCompra);




 