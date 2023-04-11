/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */

var numero = parseInt(prompt("Ingrese un número"));

function indicar(value) {
  if (numero % 2 == 0) {
    console.log("El número ingresado es par");
  } else if (numero % 2 != 0) {
    console.log("El número ingresado es impar");
  }
}
indicar(numero);




/* 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. */

var numero1 = parseInt(prompt("Ingrese un número"));
var numero2 = parseInt(prompt("Ingrese otro número"));

function funcion(num1, num2) {
  if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
  } else {
    console.log("El segundo número es mayor que el primero");
  }
}
funcion(numero1, numero2);






/* 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. */

var numero = parseInt(prompt("Ingrese un número"));

function funcion(value) {
  if (numero % 5 == 0) {
    console.log("El número ingresado es múltiplo de 5");
  } else {
    console.log("El número ingresado no es múltiplo de 5");
  }
}

funcion(numero);






/* 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número. */

var numero = parseInt(prompt("Ingrese un número"));

function funcion(value) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}
funcion(numero);






/* 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado. */

var palabra = prompt("Ingrese una palabra");
var numero = parseInt(prompt("Ingrese un número"));

function parametros (value1,value2){
    for(let i=1; i<=numero; i++){
        console.log(palabra);
    }
}
parametros(palabra,numero);







/* 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
 */

var array = [1,2,3,4,5];

function imprimir (value){
    console.log(array);
}
imprimir(array);







/* 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0". */

var array = [1,2,3,4,5,6,7,8,9,10];

var array = [1,2,3,4,5,6,7,8,9,10];

function imprimir (value){
    for(let i=0; i<array.length; i++){
      if(i == [5]){
        continue;
      }
     console.log(i);
    }
 
}
imprimir(array);






/* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.  */

var array = [1,2,3,4,5];
var numero = 5;

function funcion (value1, value2){
    for(let i=0; i<=array.length-1; i++){
        console.log(array[i]*numero);
    }

}
funcion (array,numero);S