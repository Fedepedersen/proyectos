const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


///////////////////////////////////////////////////////////////a)  Las pizzas que tengan un id impar.

//opción 1
 for(let i=0; i<pizzas.length; i++) {
   
  if((pizzas[i].id % 2) == 1 ){
    console.log(`Estas son las pizzas impares: ${pizzas[i]}`);
  }
} 

//opción 2
/* for(let i=0; i<pizzas.length; i++) {
  if((pizzas[i].id % 2) == 0 ){
   continue
  }
  console.log(pizzas[i].id)
} */


//////////////////////////////////////////b) Responder: ¿Hay alguna pizza que valga menos de $600?
let stringPizzas = "Esta pizza vale menos de $500: "
 for (let i=0; i<pizzas.length; i++){
  if((pizzas[i].precio < 1500)){
    
    /* stringPizzas = stringPizzas + pizzas[i].nombre+ ', '; */
    stringPizzas = `${stringPizzas} ${pizzas[i].nombre} , `;  
  }
}

console.log(stringPizzas)

////////////c) El nombre de cada pizza con su respectivo precio.

for (let i=0; i<pizzas.length; i++){
  console.log(`La ${pizzas[i].nombre} vale ${pizzas[i].precio}`)
}


///////////////d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

for (let i=0; i<pizzas.length; i++){
  let arrayDeIngredientes = pizzas[i].ingredientes
   console.log(`La ${pizzas[i].nombre} contiene los siguientes ingredientes: `) 
  for(let indexIngrediente=0; indexIngrediente<arrayDeIngredientes.length; indexIngrediente++){
console.log(arrayDeIngredientes[indexIngrediente])
  }
  

}