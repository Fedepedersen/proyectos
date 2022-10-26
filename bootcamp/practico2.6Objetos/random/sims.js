
class Dog{
    constructor(name){
        this.name = name
    }
    andar(){}

    getName(){
        return this.name
    }
}

class Sim {
     constructor(name, dog, friends){
        this.name = name,
        this.dog = dog,
        this.friends = friends
     }
     getDog(){
        return this.dog
     }
}

const firulais = new Dog('Firulais')
const rupert = new Dog('Rupert')
const amigo1 = new Sim('amigo1', rupert)

const amigo2 = new Sim ('amigo2')

const friends = []

friends.push(amigo1)
friends.push(amigo2)




const pedro = new Sim('Pedro', firulais, friends)


console.log(pedro.getDog().getName())




