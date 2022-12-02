//3)
//Ahora pasemos a crear nuestro objetos con clases constructoras. Creá una clase “Zapatilla” que tenga las mismas propiedades que los objetos creados anteriormente. Luego, creá 2 zapatillas utilizando esa clase e imprimí ambas por consola.

class zapatilla {
    constructor(marca, talle, color){
        this.marca = marca;
        this.talle = talle;
        this.color = color;
    }
}
const zapatilla1 = new zapatilla ('Topper', 42, 'Negro');
const zapatilla2 = new zapatilla ('Adidas', 42, 'Gris');

console.log(zapatilla1, zapatilla2);