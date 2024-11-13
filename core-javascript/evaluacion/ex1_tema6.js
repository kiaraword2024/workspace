
function fizzBuzz(salida) {

    const numeri = Number(salida);
    
    if (isNaN(numeri)){
        return ("No es un numero");
    } 
    if (salida === 0) {
        return '0';
    }
    if(numeri % 3 === 0 && numeri % 5 === 0){
        return ("Chiara Polo");
    }
    else if(numeri % 3 === 0){
        return "Chiara";
    }
    else if(numeri % 5 === 0){
        return "Polo";
    }
    else{
        return numeri.toString();
    }
}

module.exports = fizzBuzz;