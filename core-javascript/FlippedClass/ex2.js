*/ eslint-disable camelcase */

 
 const frutas = ["mandarina", "pera", "melón", "sandía", "manzana"]
frutas.map(fruta => console.log(fruta))  
const numeros = [1,2,3,4]
const dobles = numeros.map( numero => numero * 2) 

  //Crea una función que comprueba si dos arrays son idénticos
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];
  function comprobar (){
  if (arr1 !== arr2){ 
     return arr3 = [arr1 + arr2]
  }
  else {
    return("no son iguales")
  }
  }
  console.log(comprobar())