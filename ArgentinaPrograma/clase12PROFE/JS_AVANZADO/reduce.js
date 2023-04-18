var almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'torta de queso'},
    {principal: 'pizza', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'},
    {principal: 'arepa', postre: 'golfeados'},
    {principal: 'arepa', postre: 'churros'}
];

// var cantidadArepas = 0;

// for (var i = 0; i < almuerzos.length; i++) {
//    if (almuerzos[i].principal=== 'arepa') {
//        cantidadArepas++;
//    };
// }
// console.log(cantidadArepas);

var cantidadArepas = almuerzos.reduce(function(contador, almuerzo) {
    if (almuerzo.principal === 'arepa') {
        return contador + 1;
    } else {
        return contador;
    }
}, 0)


console.log(cantidadArepas);