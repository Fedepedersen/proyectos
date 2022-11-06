//5)
//Escribí una función que reciba dos números por parámetro y que imprima por consola todo el intervalo entre ambos números, incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben imprimirse en consola los números “1” , “2” y “3”. Sin son iguales, que se imprima “Ambos números son inum1uales”.

// creemos que el usuario no es idiota y num1 es menor que num2

const imprimeEntre = (num1,num2) =>{
    if(num1!==num2){
        for (let i = num1; i <= num2; i++) {
            console.log(i);
            
            
        }
    }
    else{
        console.log(`Ambos números son iguales.`)
    }
}
