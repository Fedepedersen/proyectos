const numeros = [1, 2, 3, 4, 5];
 
let encontrar = numeros.findIndex(valor => valor == 4);
console.log(encontrar); // 3
 
 
encontrar = numeros.findIndex(valor => valor == 10);
console.log(encontrar); // -1
