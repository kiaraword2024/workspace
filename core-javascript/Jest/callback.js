 //eslint-disable camelcase;

function mapWithCb(cumple, callback) {
    return cumple.map(callback);
}
let cumple = [20, 1, 1983]
let sum = 0 
for (let num of cumple) {
    sum += num;
  }
const sumaCumple = mapWithCb(cumple, (sum1)=> sum1 + sum);

console.log(sumaCumple);

module.exports = mapWithCb;

function callback_join(arg1, arg2) {
  return (arg1 + arg2);
}

function entendiendo(Nombre, Apellido, callback_join) {
  // Llamamos a la función callback con el resultado
  return callback_join(Nombre, Apellido);
  
}

console.log(entendiendo('Clara ', 'Peter', callback_join));
