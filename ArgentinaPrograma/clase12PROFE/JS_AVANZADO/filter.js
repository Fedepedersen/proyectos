var almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'torta de queso'},
    {principal: 'pizza', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'},
    {principal: 'arepa', postre: 'golfeados'},
    {principal: 'arepa', postre: 'churros'}
];

// var postresParaPlatosConArepas = [];

// for (var i = 0; i < almuerzos.length; i++) {
//   if (almuerzos[i].principal === 'arepa') {
//    postresParaPlatosConArepas.push(almuerzos[i].postre);
//  }
// }

// console.log(postresParaPlatosConArepas);

var postresParaPlatosConArepas = almuerzos
    .filter(function(almuerzo) {
     return almuerzo.principal === 'arepa';
    })
    .map(function(almuerzo){
        return almuerzo.postre;
    });


console.log(postresParaPlatosConArepas);