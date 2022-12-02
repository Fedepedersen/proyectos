//9)
//Ahora hagamos lo contrario. Escribí un código que imprima por consola todos los números impares del array de números.

let miArray=[1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < miArray.length; index++){
    if (miArray[index] % 2=== 1) {
        console.log(miArray[index]);
    }
}