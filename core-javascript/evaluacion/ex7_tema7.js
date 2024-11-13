/* Crea un programa que pida un valor de tamaño de array por input y
después el número del cuál se van a obtener múltiplos y devuelva un
array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8]) */
/* eslint-disable camelcase */
const readline = require('readline');

const multiplos = (tamano, numero) => {
  if (typeof tamano !== 'number' || typeof numero !== 'number' || tamano <= 0) {
    return ("Por favor, introduce valores válidos.");
  }
  return Array.from({ length: tamano }, (_, i) => (i + 1) * numero);
};

const pregunta = (rl) => {
  rl.question('Introduce el tamaño del array: ', (tamanoArray) => {
    rl.question('Introduce el número para obtener los múltiplos: ', (numeroBase) => {
      tamanoArray = parseInt(tamanoArray);
      numeroBase = parseInt(numeroBase);

      if (isNaN(tamanoArray) || isNaN(numeroBase) || tamanoArray <= 0) {
        console.log("Por favor, introduce valores válidos.");
      } else {
        const resultadoFinal = multiplos(tamanoArray, numeroBase);
        console.log("El array de múltiplos es:", resultadoFinal);
      }

      rl.close();
    });
  });
};

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  pregunta(rl);
}
