let nombre ="Kiara";

function Nombrar(){
    if (nombre == "Kiara")
        return("mi Nombre");
    else{
        return("no es mi Nombre");

    }
}
console.log(Nombrar());
function saludar (Hola, Nombre){
    return ("Hola"+"Nombre")
}
let saludarKiara = "Hola"+ "Kiara";
console.log(saludarKiara);
//ej 2 tema 5//
function clickBoton(){
    return ("Te saludo")
}

console.log(clickBoton());
//ej4 tema 5//

let email= "nombre1@gmail.com"

function correo(){
    if(email == "nombre@gmail.com")
        return ("Email correcta")
    else{
        return("Email no correcta");
    }
  }
console.log(correo());

//función numero random de 1 a 10//
function getRandomNumber(){
    const random =Math.random()
        const multiplied = random * 10
        const rounded =Math.floor(multiplied)
        const result = rounded +1
        return result
    }
getRandomNumber()
console.log(getRandomNumber());
