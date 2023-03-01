//** Variables **//

//Declaración de una variable (crearla).

//Debo anteponer la palabra reservada "var".
//Separado de la palabra "var", va el nombre de la variable.
//Toda sentencia ("renglón" que estarían escribiendo, por ahora..) debe terminar con ; (punto y coma).
    var color;

// Hola! Perdón que interrumpa, me presento... soy un comentario de una sola linea y no soy tenido en cuenta como código a ejecutarse :( .

/* Hola! No me dejen afuera...
Yo soy un comentario
pero de varias lineas ;)
Ahora sigan con las variables, gracias!
*/

//Asiganción de un valor a la variable.

//Utilizamos el signo igual ( = ) para *asignar* (guardar) un valor en la variable previamente declarada. (si no declaré la variable me estaría dando un error :P )
//La primera vez que se le guarda un valor a una variable tambien se llama *inicializar* la variable.
//No es siempre que le guardamos un valor a la variable que la estamos inicializando, recordemos que en el transcurso del código puedo pisar ese valor por otro.

    color = "naranja";

//Para ver en consola se utiliza:
    console.log("Hola Mundo!");

//Entre los parentesis va lo que quiero mostrar en consola...
//Si yo escribo dentro de los parentesis entre comilla, simples o dobles, veré textual lo que escribí, claro... estoy mostrando una cadena de texto que dice: Hola Mundo!.
//Si yo escribo sin comillas estoy queriendo mostrar, por ejemplo, una variable:

    console.log(color);

//En ese caso se mostrará el valor guardado en la variable - color - .

//Cambio de valor en una variable:

//Para cambiar el valor de una variable solamente debo "llamarla" por su nombre y asignarle el nuevo valor con el signo = (igual) como dice en el renglón #17.
    
    color = "rojo";

//Si ahora hago:

    console.log(color);

//Qué estría saliendo en consola? Bingo... rojo!
//Ahora hagamos ooootra variable:

    var color2 = "azul";

//Cómo hago para ver los valores de ambas variables?
//Ssssasic...

    console.log(color, color2);

//En este caso imprimmirá en consola en un primer renglón el valor de << color >> y en un segundo renglón el valor de << color2 >>  -.
//Y si quiero verlos juntos en el renglón? eh?
//*Concatenan* (Pegar cadenas, o algo así, de texto en este caso.) los valores de las variables con el signo + (más).
    console.log( color + color2);
//Acá van a tener un pequeño problema... los van a pegar demasiado. Saldrá un valor pegado al lado, inmediatamente, al otro... algo asi: rojoazul y no está bueno.
//Solución: Concatenar un espacio (solo un espacio entre las comillas) para separarlos.
    console.log( color + " " + color2);

//Puede que en este caso, el de los colores, sirva mas concatenar con una , (coma) más que un espacio:
    console.log( color + ", " + color2);
//Pero quizás, en algún momento les pidan mostrar nombre y apellido (guiño, guiño) y ahí viene bien el espacio... 

//** Typeof ** //

//Es un operador que trabaja sobre lo que pongamos dentro del paréntesis
//Devuelve (en formato de string) el  << tipo de dato >> que operamos (puede ser una variable o un valor).
//TIPO, no valor! atenti..
// Si hago:

    typeof(color);

//Qué me va a devolver? "rojo" o "string"?
//Muy bien... "string", por que devuelve el <<type of>> dato y no el dato en sí.
//También puedo operar un valor directamente:

    typeof(45);
    //Claro, me devolverá << number >>

//Ahora todo muy lindo... y si quiero imprimir en consola esa respuesta?
//Tengo dos maneras de hacerlo:

    //1. Guardo el resultado, de operar la variable <<colo>> con el typeof, en ooootra variable:
        var res = typeof(color);
    //Ahora en << res >> debería tener guardado la cadena "string".
    //Y lo muestro:
        console.log(res);

    //2. Ahorrarme un paso y mostrar directamente el resultado de la operación.
        console.log(typeof color);

    //*Notesé que use el typeof sin los paréntisis. También es válido en cualquiera de los dos casos.

//FIN, por ahora.
