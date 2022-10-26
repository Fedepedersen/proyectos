const helados = ['Vainilla','Chocolate', 'Dulce de leche','Americana', 'Frutilla']

const helados2 = [1, 3, 6]

 function mezcladorDeHelados (gustos, nuevoSabor){
    const ultimoHelado = gustos.pop()
    gustos.unshift(ultimoHelado)
    gustos.push(nuevoSabor)
    console.log(gustos)
} 

/* const mezcladorDeHelados = (gustos) => {
    const ultimoHelado = gustos.pop()
    gustos.unshift(ultimoHelado)
    console.log(gustos)
} */




mezcladorDeHelados(helados, 'HeladoDeTuVIeja')