
function verDigito(digito, numero) {
    
    let digitoStr = digito.toString();
    let numeroStr = numero.toString();
    
    let start = 0;
    
    for (let i = 0; i < numeroStr.length; i++) {
        if (numeroStr[i] === digitoStr) {
            start++;
        }
    }
    
    return start;
}

let digito = prompt("Ingrese un dígito,porfavor:");
let numero = prompt("Ingrese un número,porfavor:");

let resultado = verDigito(digito, numero);

alert("El dígito "+ digito + " aparece " + resultado + " veces en el número " + numero);
