//7)
//Escribí un bucle que imprima todos los números del array menos el número 7.

let miArray=[1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < miArray.length; index++){
    if(miArray[index]===7){
    continue;
    }
console.log(miArray[index]);
}