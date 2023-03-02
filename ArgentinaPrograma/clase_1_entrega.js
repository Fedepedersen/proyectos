/* Guía de ejercicios
1. Declarar una variable de nombre “auto”, asignarle el valor “Corolla” y mostrarla por
consola*.

2. Asignarle el valor “308” a la variable declarada en el ejercicio anterior y mostrarla por
consola.

3. A la misma variable de los ejercicios anteriores, asignarle el valor “C4”. Volver a
mostrarla por consola.

4. Declarar dos variables “nombre” y “apellido”, asignarles tu nombre y apellido. Luego
mostrar por consola ambos valores. Usar un solo console.log( )

5. Dada una variable llamada “fruta” con el valor “naranja”. Declarar una variable
“tipoDeLaVariableFruta” y asignarle como valor el tipo de la variable “fruta”. **

6. Para los ejercicios 1, 2 y 3, mostrar por consola el tipo de la variable en cada nueva
asignación.*/

/*1**********************************************************************************/

var auto;
auto = "Corolla";

console.log(auto);

/*2**********************************************************************************/
auto = "308";

console.log(auto);

/*3**********************************************************************************/
auto = "C4";

console.log(auto);

/*4**********************************************************************************/
var nombre;
var apellido;

nombre = "Federico Ariel";
apellido = "Pedersen";

console.log(nombre,apellido);

/*5**********************************************************************************/
var fruta;
fruta = "naranja";

var tipoDeLaVariableFruta;
tipoDeLaVariableFruta = typeof(fruta);

console.log(tipoDeLaVariableFruta);

/*6**********************************************************************************/

var auto;
auto = "Corolla";

console.log(typeof auto);

auto = "308";

console.log(typeof auto);

auto = "C4";

console.log(typeof auto);
