console.log("Encriptador ROT\n" + 
            "----------------\n\n" +
            "Para empezar, ingrese el texto a encriptar y la llave para encriptar.\n");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("¿Que texto desea encriptar? ", texto => {
    readline.question("¿Que llave se va a utilizar? ", llave => {
    
    console.log(encriptar(texto, llave));

    readline.close();
    });
  });


// Funcion para encriptar
function encriptar(texto, llave) {
    let abecedario = "abcdefghijklmnñopqrstuvwxyz";
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let posicion = abecedario.indexOf(texto[i]);
        if (posicion >= 0) {
        let nuevaPosicion = (posicion + llave) % abecedario.length;
        resultado = resultado + abecedario[nuevaPosicion];
        } else {
            resultado = resultado + texto[i];
        }    
    }

    return resultado;
    
}
 
