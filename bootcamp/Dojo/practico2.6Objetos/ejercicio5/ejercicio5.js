//5)
//A la clase Zapatilla, agregale una propiedad “precio”. Luego creá una función que reciba dos zapatillas , compare el precio de ambas y que devuelva por consola un mensaje que diga:

// > “La zapatilla {marca} es la mas cara del mercado, con un valor de ${precio}.”


//Si ambas tienen el mismo precio, imprimí un mensaje que diga que las zapatillas de ambas marcas son las mas caras del mercado, con un valor de ${precio}.

class zapatilla {
    constructor(marca, talle, color, precio){
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}
const zapatilla1 = new zapatilla ('Topper', 42, 'Negro', 10.000);
const zapatilla2 = new zapatilla ('Adidas', 42, 'Gris', 15.000);

const imprimirZapatilla = (zapatilla1,zapatilla2) => {
    if (zapatilla1.precio < zapatilla2.precio) {
        console.log(`La zapatilla ${zapatilla2.marca} es la mas cara del mercado, con un valor de ${zapatilla2.precio}`)
    }else if(zapatilla1.precio > zapatilla2.precio) {
        console.log(`La zapatilla ${zapatilla1.marca} es la mas cara del mercado, con un valor de ${zapatilla1.precio}`)
    }else{
        console.log(`Las zapatillas de ambas marcas son las mas caras del mercado, con un valor de ${zapatilla1.precio}.`)
    }
}

imprimirZapatilla(zapatilla1, zapatilla2);