 eslint-disable camelcase 

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
