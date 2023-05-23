
const calculadoraIVA = {
    calcularIVA: function(cifra) {
      const iva = cifra * 0.21;
      return iva;
    }
};

const calculadoraGanancias = {
    calcularGanancias: function(cifra) {
      const ganancias = cifra * 0.35;
      return ganancias;
    }
};

const calculadoraOS = {
    calcular: function(cifra) {
      const OS = cifra * 0.10;
      return OS;
    }
};

var sueldo;
const calculoFinal = [];

sueldo = prompt("Ingrese sueldo: ");

calculoFinal.push(calculadoraIVA.calcularIVA(sueldo));
calculoFinal.push(calculadoraGanancias.calcularGanancias(sueldo));
calculoFinal.push(calculadoraOS.calcular(sueldo));


for (let i = 0; i < calculoFinal.length; i++) {
    var sueldoFinal = sueldo - calculoFinal[i];
    return sueldoFinal;
    
}

console.log("Esto es lo que te queda después de pagarle al estado: " + sueldoFinal);