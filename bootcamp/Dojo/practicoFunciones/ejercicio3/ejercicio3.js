//3)
//Escribí una función que reciba dos números por parámetro, multiplique a cada uno por dos y luego imprima por consola la suma de ambos números multiplicados.

const numeros = (num1,num2) =>{
    let resultado1 = num1*2;
    let resultado2 = num2*2; 
    console.log(`El resultado de la suma de ambos multipicados es: ${resultado1 + resultado2}`);
}


let numero1 = 2;
let numero2 = 5;

numeros(numero1,numero2);