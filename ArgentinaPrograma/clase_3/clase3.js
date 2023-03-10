/*En Javascript el nombre de la variable debe cumplir con los siguientes requisitos: 

    -Utilizar caracteres del alfabeto inglés (a-z, sin ñ, ni tildes, ni caracteres especiales).
    -Puede tener números, PERO NO empezar con uno.
    -Puede empezar y/o contener:
        Guión bajo:  _ 
        Signo peso: $
    -No puede tener espacios en blanco.
    -JS es sensible a caracteres (case sensitive), diferencia minúsculas de mayúsculas.*/

/*Existe una serie de palabras reservadas que no pueden utilizarse como nombre de variables: 

    break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, abstract, boolean, byte, char, class, const, debugger, double, enum, export, extends, final, float, goto, implements, import, int, interface, long, native, package, private, protected, public, short, static, super, synchronized, throws, transient, volatile.

*/
/*Operadores

    Aritméticos: 
        Suma → +
        Resta → - 
        Multiplicación → *
        División → /
        Resto → % (El resto de la división entera.)
        Incremento → ++ (Suma 1 al valor numérico)
        Decremento → -- (Resta 1 al valor numérico)

    Concatenación

    Asignación:
        Asignación → =
        v1 = v2   (asigna a v1 el contenido de v2.)
        Asignación con suma →   +=
        v1 += v2   (asigna a v1 el contenido de v1 + v2 (v1 = v1 + v2)). 
        Asignación con resta →   -=
        v1 -= v2   (asigna a v1 el contenido de v1 - v2 (v1 = v1 - v2)).
        Asignación con multiplicación →   *=
        v1 *= v2   (asigna a v1 el contenido de v1 * v2 (v1 = v1 * v2)).
        Asignación con división →   /=
        v1 /= v2   (asigna a v1 el contenido de v1 / v2 (v1 = v1 / v2)).
        Asignación con resto →   %=
        v1 %= v2   (asigna a v1 el contenido de v1 % v2 (v1 = v1 % v2)).

    Comparación:
        Igualdad →   ==  (Devolverá boolean true si los valores comparados son iguales.)
        Igualdad estricta →   === (Devolverá boolean true si los valores y tipos de datos comparados son iguales. )
        Desigualdad →   != ( Devolverá boolean true si los valores comparados no son iguales.)
        Desigualdad estricta →   !== ( Devolverá boolean true si los valores comparados o tipos de datos no son iguales. )
        Mayor que →   >
        Mayor o igual que →   >=
        Menor que →   <
        Menor o igual que →   <=

    Javascript define prioridades para la evaluación de operadores. 
        El orden es el siguiente: 
            1. Agrupaciones → () 
            2. Negación, incremento, decremento → ! ++ -- 
            3. Multiplicación, división, módulo → * / % 
            4. Suma / concatenación, resta → + - 
            5. Relaciones lógicas → > >= < <= 
            6. Igualdad, desigualdad → == === != !== 
            7. Operador AND → && 
            8. Operador OR → ||
            9. Condicional → ?: (NO, no está en el curso... si llegamos, en alguna clase lo explico) 
            10. Asignación → = += -= *= /= %=
*/



//EJEMPLOS : Estructuras de Decisión

// if [else] (estructura mínima)

//Supongamos que el usuario ingresa un número, el cual se guarda en la variable num1, y quiero saber si el número que ingresó es mayor a 10:

var num1 = 13;

//Sintaxis:
//1ero- Palabra reservada << if >>
//2do- Paréntesis con la condición a cumplir.
//3ero- Las llaves "de la parte verdadera". Si se cumple la condición (true) ingresa a  las llaves - {} - que contienen el bloque de código a ejecutar.
//4to- OPCIONAL la estructura del << else >>. En caso de que no se cumpla la condición, entrará en las llaves "de la parte falsa".

if( num1 > 10 ){

    //Este código se ejecuta si es verdadero que el valor guardado en num1 es mayor a 10.
    //En este caso, como ejemplo, ejecutamos un console.log... pero pueden ser diversas cosas las que puedo ejecutar.
    console.log("el número es mayor a 10");

}else{

    //El else no lleva condición... inmediatamente después van las llaves - {} -
    //Este código se ejecuta si es falso que el valor guardado en << num1 >> es mayor a 10.
    //En este caso, como ejemplo, ejecutamos un console.log... pero pueden ser diversas cosas las que puedo ejecutar.
    console.log("el número es menor a 10");

}

// if [else if] [else]
//Se utiliza para, en caso de no cumplirse la primera condición, repreguntar, evitando un par de llaves.

//Ahora supongamos que el usuario ingresa un número, el cual se guarda en la variable << num1 >> creada anteriormente.
//Primero quiero saber si el número que ingresó es << 0 >> y si no lo es, si es par o impar.

if( num1 === 0 ){

    //Este código se ejecuta si es verdadero que el valor guardado en num1 0.
    //En este caso, como ejemplo, ejecutamos un console.log... pero pueden ser diversas cosas las que puedo ejecutar.
    console.log("el número es 0");

}else if( num1 %2 == 0){

    //El << else >> no lleva condición... separado por un espacio va el << if >> que hace la repregunta.
    //Este código se ejecuta si es falsa la primera condición (si no es << 0 >> el valor guardado en num1) pero verdadera la segunda condición (si es par el valor guardado).
    //En este caso, como ejemplo, ejecutamos un console.log... pero pueden ser diversas cosas las que puedo ejecutar.
    console.log("el número es par");

}else{

    //Este último << else >> no lleva condición... inmediatamente después van las llaves - {} -.
    //Este código se ejecuta si es falsa la primera y la segunda condición (no es << 0 >> ni es par el valor guardado en num1).
    //En este caso como ejemplo, ejecutamos un console.log, pero pueden ser diversas cosas las que puedo ejecutar.
    console.log("el número es impar");

}

//Otra forma de realizar esas preguntas se pueden hacer con...
// if [else] anidados
//Consiste en crear una estructura << if[else] >> dentro de otra... ya sea en la parte verdadera [if] o la parte falsa [else] de la primera estructura de decisión.

//Mismo ejemplo que la estructura anterior.

//primero descarto si es << 0 >> el número ingresado por el usuario.
if( num1 === 0 ){

    //Este código se ejecuta si es verdadero que el valor guardado en num1 0.
    //En este caso, como ejemplo, ejecutamos un console.log... pero pueden ser diversas cosas las que puedo ejecutar.
    console.log("el número es 0");

}else{

    //Una vez que sé que el número ingresado no es << 0 >> (por eso ingresó a la parte falsa) averiguo si es par o impar con una nueva estructura de decisión anidada dentro de esta parte falsa.

    if( num1 %2 == 0){

        //Este código se ejecuta si es falsa la primera condición (si no es << 0 >> el valor guardado en num1) pero verdadera la nueva condición anidada (si es par el valor guardado).
        //En este caso, como ejemplo, ejecutamos un console.log... pero pueden ser diversas cosas las que puedo ejecutar.
        console.log("el número es par");
    
    }else{
    
        //Este << else >> no lleva condición... inmediatamente después van las llaves - {} -.
        //Este código se ejecuta si la nueva condición anidada (no es par el valor guardado en num1) es falsa.
        //En este caso, como ejemplo, ejecutamos ... bla bla bla.
        console.log("el número es impar");
    
    }

}

//switch

//Es un selector de casos, compara si el valor de la variable es estrictamente igual a alguno de los valores de los case.
//Funciona como un if [else if] [else], limitado solamente a comparaciones ===.
//Cada case se cierra con un break, que indica que “rompe” el switch si entro al case.
//Al igual que los condicionales, tiene un caso por defecto, que será el default.

//Como ejemplo le pedimos al usuario/alumno que ingrese el número de su comisión y lo guardamos en la variable << com >>.
//Según que comisión sea, informaremos que días cursa.
var comi = 14;

//Sintaxis
//Palabra reservada << switch >> seguida de paréntesis donde pondremos la variable a analizar.
//Luego las llaves - {} - donde tendré los casos y el código a ejecutarse si se cumple ese caso.

switch(comi){
    //palabra reservada case seguida del caso posible, termina con - : - (2 puntos).
    case 54:
        //Código a ejecutar
        console.log("cursa los días Lunes y Miércoles");
    //"Rompo" la ejecución de la estructura de decisón (switch) y salgo, si el valor guardado en la variable analizada es === a este caso.
    break;
    case 55:
        //Código a ejecutar
        console.log("cursa los días Martes y Jueves");
    //"Rompo" la ejecución de la estructura de decisón (switch) y salgo, si el valor guardado en la variable analizada es === a este caso.
    break;
    case 56:
        //Código a ejecutar
        console.log("cursa los días Lunes y Miércoles");
    //"Rompo" la ejecución de la estructura de decisón (switch) y salgo, si el valor guardado en la variable analizada es === a este caso.
    break;
    case 57:
        //Código a ejecutar
        console.log("cursa los días Martes y Jueves");
    //"Rompo" la ejecución de la estructura de decisón (switch) y salgo, si el valor guardado en la variable analizada es === a este caso.
    break;
    //Por último puedo ejecutar un código por defecto si el valor no coincide con ningun caso.
    //Palabra reservada << default >>
    default:
        console.log("No existe dicha cursada");
    //Este caso no lleva << break >> ya que, es la última instancia y sale por default... ;)

}




