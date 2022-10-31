//1)
// Escribí una función que reciba como parámetro un nombre y que imprima en consola “hola, soy {nombre} “.

const funcionNombre = (nombre) =>{
    
  console.log(`Hola, soy un ${nombre}`);
      
  }
  
  let names = ["pablo", "pedro", "juan"]
  
  for (let index = 0; index < names.length; index++) {
      funcionNombre(names[index]);
      
  }