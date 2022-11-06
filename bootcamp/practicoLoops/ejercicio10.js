//10)
//Vamos a complicarla un poquito mas, escribí un código que por cada número del array imprima en consola la tabla (del 0 al 10) del número que corresponda en cada iteración.

//En cada iteración , el mensaje debe leerse como en el siguiente ejemplo “ 1(número) multiplicado por 2 (número de la tabla) es igual a 2(resultado) “.

let miArray=[1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < miArray.length; index++){
    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
        let resultado = miArray[index]*multiplicador
        console.log(`${miArray[index]} multiplicado por ${multiplicador} es igual a ${resultado}`)               
    }
    console.log('entro')
    
}