/* let nombre = "pepito";
let edad = 45;
let direccion = "AV";


//escturcturacion de objetos

const persona = {
    nombre: "pepito", 
    edad: 45, 
    direccion: "AV"
};

let clave = "edad";

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);

 */

/* function Persona(nombrePersona, edadPersona, direccionPersona) {
    this.nombre = nombrePersona;
    this.edad = edadPersona;
    this.direccion = direccionPersona;
}

const persona1 = new Persona("pepito", 45, "AV");
const persona2 = new Persona("juan", 25, "AV");

console.log(persona2.nombre); */

/* function Producto(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
}

const producto1 = new Producto("Coca", 120, "coca.jpg");
const producto2 = new Producto("Pepsi", 100, "pepsi.jpg");

 */

class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

