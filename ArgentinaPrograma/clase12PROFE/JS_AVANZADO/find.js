const numeros = [1, 2, 3, 4, 5];
 
let encontrar = numeros.find(valor => valor == 4);
console.log(encontrar); // 4
 
 
encontrar = numeros.find(valor => valor == 10);
console.log(encontrar); // undefined
