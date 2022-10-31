let dato= prompt("ingrese una string");

if(dato === "alerta"){
    alert(`Soy una ${dato}`);
}
if(dato === "consola"){
    console.log(`Soy un mensaje en la ${dato}`)
} else{
    let message = "Me muestro en ambos lados";
    alert(message)
    console.log(message)
}