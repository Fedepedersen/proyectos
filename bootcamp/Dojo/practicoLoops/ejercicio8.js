//8)
//Escribí un código que imprima por consola a todos los números pares del array de números.

//Pista: Podes utilizar el operador de modulo ( % ).

let miArray=[1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < miArray.length; index++){
    if(miArray[index] % 2 == 0){
        console.log(miArray[index]);
    }
    
}