
/*
REPASO ARY AFTER CONTEXT:
Tipos de datos: 
-string
-booleano
-numerico
-array
-objeto
-funcion
-undefined
-null

variable: una variable es un espacio en la memoria que almacena un valor.

const nombre = "juan";
const edad = 25;
const casado = false;
const hijos = { nombre:2 "diego", };
const mascotas = [];
const trabajo = function(){};
const comida = undefined;

console.log(edad)
const persona = {
    nombre: "juan",
    edad: 25,
    casado: false,
    hijos: [juan, maria, diego],
    trabajo: "desarrollo web"
}

console.log(persona.hijos[1]) // muestra a maria.

Estructuras de Control: IF, ELSE, SWITCH, FOR, WHILE

*/

//Acceder a un objeto
/*
persona.nombre = "Pedro";
const nombrePersona = persona.nombre;
const nombrePersona2 = persona["nombre"];
const lugarDeTrabajo = persona.trabajo.lugarDeTrabajo
*/

/* 
nombre_estructura(condicion){
    Bloque
}
if (true) {
    console.log("hola") // muestra hola
}

for (let i=0 ; i < 10; i++){
    console.log(i) // muestra 0,1,2,3,4,5,6,7,8,9
}
*/


/* 
IF : SI
Agregar al carrito SI (el producto no esta en el carrito) SINO aumentar la cantidad
*/

//Ejemplo carrito
/*
const carritoAux = [];
if(productoEnCarrito()){
    carritoAux = aumentarCantidad();
}else {
    carritoAux = agregarAlCarrito();
}

const productoEnCarrito = () => {
    //agregar logica de si esta en al carrito
    return true;
};

const aumentarCantidad = () => {
    return ["Aumento la cantidad"];
}
const agregarAlCarrito = () =>{
    return ["Agrego al carrito"]
}
*/

// funciones
// function nombreFunction(parametro1,parametro2){
//     //un parametro es una variable que se le pasa a la funcion
//     return true;
// }

// const funcionPrueba = nombreFuncion;