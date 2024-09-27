let nested_object = { // Definde un objecto(Statements)

    property1: { stringie: "hola" },// key/value (expression)
     property2: 2.3 // key/value (expression)
    }

console.log(nested_object.property1);
/* la consola me devuelve objecto,
 despliego el menu,
  pone string hola
  */
 
 let matrix = [[1,2,3], [4,5,6], [7,8,9]];//Define un array(expresion)//
 let sparseArray = [1,,,,5];// Define un array(espression)//

console.log(matrix[0]);
console.log(sparseArray);//devuelve 1,empty x 3,5//
//operador ternario//
let edad = 15;
let acceso = edad > 18 ?"Permitir acceso": "No permitir acceso"
console.log(acceso);

