
const juego = ["piedra", "papel", "tijera"];

let sacoX = '';

while(sacoX <= juego.length){
  sacoX= juego[Math.floor(Math.random() * 3)];
console.log(sacoX);
}
let sacoY = '';
while(sacoY <= juego.length){
  sacoY = juego[Math.floor(Math.random() * 3)];
console.log(sacoY);
}
function jugar(){
  if(sacoX === sacoY){
    return('Empate: Vuelves a tirar!')
  }
else if(sacoX ==='piedra' && sacoY ==='tijera'|| sacoX ==='tijera' && sacoY ==='piedra'){
    return('Gana piedra')
  }
else if(sacoX ==='papel' && sacoY ==='piedra'|| sacoX ==='piedra' && sacoY ==='papel'){
  return('Gana papel')
}
else if(sacoX ==='tijera' && sacoY ==='papel' || sacoX ==='papel' && sacoY ==='tijera'){
  return('Gana tijera')
}
}
console.log(jugar());