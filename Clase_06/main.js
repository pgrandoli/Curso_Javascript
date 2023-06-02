/* //comentar el array

const arreglovacio = [];
const arregloNumeros = [1, 2, 3, 4, 5];
const nombres = ["Kevin", "Adrian", "Vicente", "Alexis"];
const variados = ["Kevin", 1, 2, true];


for (let index = 0; index < arregloNumeros.length; index++) {
    console.log(arregloNumeros[index]);
}
 */

/* const nombres = ["Kevin", "Adrian", "Vicente", "Alexis"];

nombres.splice(1, 1, "Nuevo nombre");

console.log(nombres); */

/* const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre);

    if (index != -1) {
        nombres.splice(index, 1);
        console.log(nombres);
    }
}; */
/* 
const productos = [
    {id: 1, nombre: "Arroz", precio: 1600},
    {id: 2, nombre: "Frijoles", precio: 4000},
    {id: 3, nombre: "Panela", precio: 500},
    {id: 4, nombre: "Cerveza", precio: 4500},
];

for (const item of productos) {
    console.log(item.nombre);
}

 */

class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}

const productos = [];

const producto1 = new Producto("Arroz", 1600, 1);
const producto2 = new Producto("Frijoles", 4000, 2);

productos.push(producto1);
productos.push(producto2);

console.log(productos);