/*eslint-disable camelcase */ 
let minutos = 0;
let segundos = 0;
let intervalo = null;

function contar() {
    segundos++;
    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }

    const minutos_web = minutos < 10 ? '0' + minutos : minutos;
    const segundos_web = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('cronometro_web').textContent = minutos_web + ':' + segundos_web;
}

function cronometro() {
    const mensaje = document.getElementById('estado_cronometro');
 
    if (intervalo === null) {
        intervalo = setInterval(contar, 1000);
        mensaje.textContent = "Stopwatch started";
    } else {
        clearInterval(intervalo);
        intervalo = null;
        mensaje.textContent = "Stopwatch paused";
    }
}

document.addEventListener('click', cronometro);
