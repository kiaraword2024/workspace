/*let scope ="global";

function checkScope(){
    let scope ="functionScope";
    function inside(){return scope};
    return inside;
}
console.log(checkScope()());
console.log(scope);
*/
let nombre ="Kiara";

function Nombrar(){
    if (nombre == "Kiara")
        return("mi Nombre");
    else{
        return("no es mi Nombre");

    }
}
console.log(Nombrar());
