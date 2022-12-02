//2)
//Ahora vamos a meter funciones. Crea otro objeto literal “zapatilla2” con las mismas propiedades que la anterior. Luego , escribí una función que reciba dos zapatillas como parámetro que compare el talle de ambas y que según el caso correspondiente imprima en consola:

//- Si el talle de la primera es mayor que el de la segunda, que imprima : “El talle de la zapatilla {marca1} es mayor que el de la zapatilla {marca2}".

//- Si el talle de la primera es menor que el de la segunda, que imprima : “El talle de la zapatilla {marca1} es menor que el de la zapatilla {marca2}”.

//- Si los talles coinciden, que imprima : “Los talles de ambas zapatillas son iguales”.

const zapatilla = {
    marca: "Topper",
    talle: 42,
    color: "Negro",
}

const zapatilla2 = {
    marca: "Adidas",
    talle: 42,
    color: "Gris",
}

const comparadorDeZapatillas = (zapatilla,zapatilla2) => {
    if (zapatilla.talle>zapatilla2.talle) {
        console.log(`El talle de la zapatilla ${zapatilla.talle} es mayor que el de la zapatilla ${zapatilla2.talle}`)
    }
    if (zapatilla.talle<zapatilla2.talle) {
        console.log(`El talle de la zapatilla ${zapatilla.talle} es menor que el de la zapatilla ${zapatilla2.talle}`)
    }
    else{
        console.log(`Los talles de ambas zapatillas son iguales`)
    }
}
comparadorDeZapatillas(zapatilla,zapatilla2);