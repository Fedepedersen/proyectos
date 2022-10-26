function sumar(num1,num2){
let resultado = num1+num2
console.log(resultado);
}
function restar(num1,num2){
    console.log(num1-num2);
}
function multiplicar(num1,num2){
    console.log(num1*num2);
}
function dividir(num1,num2){
    if(num2 !== 0){
        console.log(num1/num2);
    }else{
        console.log(`No se puede dividir por 0.`)
    }
}

function hacerOperacion (numero1,numero2, callback){
    callback(numero1,numero2)
}

hacerOperacion(4,8, restar)
hacerOperacion(4,8, sumar)
hacerOperacion(4,8, dividir)
hacerOperacion(4,8, multiplicar)