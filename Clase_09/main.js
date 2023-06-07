

/* //getElementById

let div = document.getElementById("parrafo");
console.log(div.innerText);

let saludo = document.getElementById("saludos");
saludo.innerText = "Hola Mundo";
*/

/* const personas = ["homero", "marge", "bart", "lisa", "maggie"];

let contenedor = document.getElementById("contenedor");

personas.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    contenedor.append(li);
});


let nombre = document.getElementById("nombre");
 */


//addEventListener(document.getElementById("boton-Saludar"), "click", saludar);
//let contenedor = document.getElementById("contenedor");

const productos = [
    {id: 1, nombre: "Arroz", precio: 125},
    {id: 2, nombre: "Fideo", precio: 70},
    {id: 3, nombre: "Pan", precio: 50},
    {id: 4, nombre: "Flan", precio: 100},
];

productos.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
        <h2>Id: ${item.id}</h2>
        <p>Nombre: ${item.nombre}</p>
        <b>Precio: ${item.precio}</b>
        <hr />
    `;
    contenedor.append(div);
});




