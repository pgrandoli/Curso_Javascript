//PreEntregaGrandoli1
//--------------------

//Generador de passwords
let largo = prompt("Ingresar largo de password: ");
let primerBucle = true;

while (primerBucle || confirm("¿Queres generar otro password?") == true){
    primerBucle = false;
    if (largo >= 4 && largo <= 128)
    {
        alert(generarPassword(largo));
    }else{
        alert("El largo debe ser entre 4 y 128 caracteres");
    }
}
