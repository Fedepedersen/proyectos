//4)
//En el ejercicio anterior imprimimos las zapatillas por consola, pero no esta bueno mostrar el objeto de una manera que no sea "user-friendly". Creá un método “getInfo” en la clase zapatilla que retorne :

//- “Soy una zapatilla “marca” de color “color” y de talle “talle”.“


//Finalmente, imprimí por consola la información de ambas zapatillas que creaste.




class Zapatilla {
    constructor(marca, talle, color){
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.counter = 0;
        this.price = 200
    }

    getMoneyPerMonth(){

    }

    getInfo () {
        return('Soy una zapatilla ' + this.marca + 'de color ' + this.color + 'y de talle ' + this.talle + '.')
    }

    getMarca(){
        return this.marca
    }
    getTalle(){
        return this.talle
    }
    getColor(){
        return this.color
    }
    setMarca(marca){
         this.marca =marca
    }
    setTalle(talle){
        this.talle = talle
    }
    setColor(color){
        this.color = color
    }
}

class Fabrica{

    constructor(zapatilla){
        this.zapatilla = zapatilla
    }


}
const zapatilla1 = new Zapatilla ('Topper', 42, 'Negro');
const zapatilla2 = new Zapatilla ('Adidas', 42, 'Gris');

zapatilla1.setColor('marron')
console.log(zapatilla1.getColor())


const miFabrica = new Fabrica(zapatilla1)

console.log(miFabrica)