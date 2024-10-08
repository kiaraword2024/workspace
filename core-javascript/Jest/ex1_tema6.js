*/ eslint-disable camelcase */
function fizzBuzz(numeri) {
    let div = 15
    if( div % 3 === 0 && div % 5 === 0){
        return numeri.toString();
    }
    if (div % 3 === 0 || div % 5 === 0){
        return numeri.toString();
    } 
     else{
        return ("No es divisible")
    }
}

console.log(fizzBuzz("Este es el numero " + (3*5)));

module.exports = fizzBuzz;