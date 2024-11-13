/*   eslint-disable camelcase 

function createObject(name, subscribers){
    console.log(obj.getStatus())}  
  
  let obj = {     
      name: "Carlos",
      subscribers : 1000,
      hash : 34 ,
        getStatus(){
      return("El canal de " + obj.name + " tiene " + obj.subscribers +" suscriptores.")}
    }

   
  console.log(createObject("Carlos", 1000))  
 */
  class Fruta {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
      }
      this.sonido = sonido 
      moverse(){
        console.log(this.nombre);
    }
}
let oliva = new Fruta("oliver","verde");
console.log(oliva);
let accion = oliva.moverse()
console.log(accion);