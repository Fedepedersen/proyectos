//2) Hacer una funcion que reciba un Array como parámetro y un Valor, la función debe retornarme la cantidad de veces que aparece ese valor, en caso de no existir en el array quiero que lo invierta

function namepene(array,val) {
    let contador = 0
    for (let index = 0; index < array.length; index++) {
        if(val == array[index]){
            contador++;
        }
        
    }

    if(contador == 0){
        return invertir(array)
    }
    return contador;

    
    
}


function invertir (arr){
    let arr1 = [];
    for (let index = arr.length-1; index >= 0; index--){
        arr1.push(arr[index])
        
    }
    return arr1;
}


let miArray = [7, 8, 5, 3, 5];
let valor = 4;

console.log(namepene(miArray,valor))