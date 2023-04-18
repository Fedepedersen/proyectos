var almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'torta de queso'},
    {principal: 'pizza', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'}
];

// var platosPrincipales = [];

// for (var i = 0; i < almuerzos.length; i++) {
//    platosPrincipales.push(almuerzos[i].principal);
// }
// console.log(platosPrincipales);

var platosPrincipales = almuerzos.map(function(almuerzo) {
    return almuerzo.principal
})

console.log(almuerzos);
console.log(platosPrincipales);