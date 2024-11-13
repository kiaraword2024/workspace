let frase = prompt("Escribe una frase donde las palabras tengan mescladas letras mayuscúlas y miniscúlas")

function titulo(union) {
  return union
    .split(' ')
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}
titulo(frase);
