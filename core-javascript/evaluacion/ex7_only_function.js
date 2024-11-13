/*eslint-disable camelcase */ 
  
  const multiplos = (tamano, numero) => {
  
    if (typeof tamano !== 'number' || typeof numero !== 'number' || tamano <= 0) {
      return ("Por favor, introduce valores válidos.");
    }
    return Array.from({ length: tamano }, (_, i) => (i + 1) * numero);
  
  };
  multiplos(4, 4);

module.exports = {
  multiplos,
};
