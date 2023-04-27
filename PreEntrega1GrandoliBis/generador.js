function generarPassword(largoPassword)
{
    let passwordGenerado = "";
    caracteres = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    for(let i=0; i<largoPassword; i++)
    {
        passwordGenerado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return passwordGenerado;
}
