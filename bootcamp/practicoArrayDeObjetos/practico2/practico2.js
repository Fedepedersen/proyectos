const helados = ['Vainilla','Chocolate', 'Dulce de leche','Americana', 'Frutilla']

/* function eliminadorRetornador (gustos) {
    const primerElemento = gustos.shift()
    gustos.push(primerElemento)
    console.log(helados)
} */

const eliminadorRetornador = (gustos) => {
    gustos.push(gustos.shift())
    console.log(gustos)
}

eliminadorRetornador(helados)
