//4)
//Escribí una función que pueda recibir un número como parámetro y que imprima por consola la tabla de multiplicación del 1 al 10 de ese número.
//Nota: El mensaje en consola debe ser "user-friendly" (Ej. : El “(número) multiplicado por (número actual de la tabla) es igual a (resultado) “)
function tablaDeMultiplicar(value){
//const tablaDeMultiplicar = (value) => {
  for (let index = 1; index <= 10; index++) {
    let resultado = value*index;
    console.log(`El ${value} multiplicado por ${index} es igual a ${resultado}`);
  }
  
};


let value = 5;
let tuviejanumber= 666


tablaDeMultiplicar(value)
tablaDeMultiplicar(tuviejanumber)