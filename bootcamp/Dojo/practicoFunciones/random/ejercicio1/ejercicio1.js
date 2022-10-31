//1)
//Hacer una función que reciba un array como parámetro y me lo devuelva dado vuelta.

function invertir (arr){
    let arr1 = [];
    for (let index = arr.length-1; index >= 0; index--){
        arr1.push(arr[index])
        
    }
    return arr1;
}

let arr = [1,2,3];

console.log(invertir(arr));