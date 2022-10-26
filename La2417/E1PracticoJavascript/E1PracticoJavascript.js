/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 */

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
        nombre: "pizza de Napolitana",
        precio: 1350,
        ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
    {
        id: 4,
        nombre: "pizza de 4 Quesos",
        precio: 1380,
        ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort"],
    },
    {
        id: 5,
        nombre: "pizza Especial",
        precio: 1000,
        ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
    {
        id: 6,
        nombre: "pizza con Ananá",
        precio: 600,
        ingredientes: ["Muzzarella", "Tomate", "Ananá"],
    },
]

//console.log(pizzas);


//a) Las pizzas que tengan un id impar.

//Opción 1

/* pizzas.forEach(pizza => {
    if(pizza.id % 2 !== 0){
        console.log(`La ${pizza.nombre} tiene id impar.`)
    }
}) */

//Opción 2
/* const pizzasImpares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
pizzasImpares.forEach((pizza) => console.log(`La ${pizza.nombre} tiene id impar.`)); */

//console.log(pizzasImpares);

//b) ¿Hay alguna pizza que valga menos de $600?

const precioMenorA600 = (pizza) => pizza.precio < 600;

/* if(pizzas.some(precioMenorA600)){
    console.log("Hay pizzas con precio menor a $600.")
} else{
    console.log("No hay pizzas con precio menor a $600.");
} */

/* const pizzaBarata = pizzas.find(precioMenorA600);
if (!pizzaBarata) {
    console.log("No hay pizzas con precio menor a $600.");
} else{
    console.log("Hay pizzas con precio menor a $600.");
} */




//c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach(pizza => console.log(`Vení a probar nuestra ${pizza.nombre} por tan solo $${pizza.precio}.`))


/* d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes. */

pizzas.forEach(pizza => {
    console.log(`Los ingredientes de la ${pizza.nombre} son:`);
pizza.ingredientes.forEach(ingrediente => console.log(ingrediente));
});