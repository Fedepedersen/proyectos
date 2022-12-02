//-Crear un array con los números del 1 al 10.
//-Crear un bucle for que imprima en consola todos los números del array.
//-Crear un bucle que imprima solo los primeros 5 números.
//-Crear un bucle que imprima los últimos 5 números.
//-Crear un bucle que imprima todos los números, excepto el que este en la 4ta posición.

let miArray= [1,2,3,4,5,6,7,8,9,10];
//2)
for (let index = 0; index < miArray.length; index++){
    const element = miArray[index];
    console.log(element);    
}

//3)
for(let index=0; index<=4; index++){
    console.log(miArray[index]);
}

//4)
for(let index=5; index<miArray.length; index++){
    console.log(miArray[index]);
}

//4b)

for (let index = array.length-1; index >=  array.length-5; index--) {
    const element = array[index];
    
}
let contador= 1
let len = miArray.length
while(contador <= 5){
    console.log(miArray[len - con])
    contador ++;
}

//5)
for(let index=0; index<=miArray.length-1; index++){
    if (index===4){        
       continue;
    }
    console.log(miArray[index]);   
}
