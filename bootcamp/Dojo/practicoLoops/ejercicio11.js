//1)Dar vuelta el array
//let arr= [3,4]

//let num0 = arr[0];
//let num1 = arr[1];

//arr[0] = num1;
//arr[1] = num0;

//2)Hacer un desplazamiento a la derecha
//let arr1 = [6,7,10,11,3,4]
//for (let index = arr1.length-2; index >= 0; index--){
//arr1[index + 1] = arr1[index]
//}
//console.log(arr1)

//3)HAcer el corrimiento a la izquierda

let arr1= [6,7,10,11,3,4]
for (let index = 0; index < arr1.length-1; index++) {
    arr1[index] = arr1[index+1];
}
console.log(arr1);