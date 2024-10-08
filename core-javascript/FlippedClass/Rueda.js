let diametro = parseFloat(prompt('Indica el diametro de tu rueda en metro'));
const grosor = parseFloat(prompt('Indica el grosor de tu rueda en metro'));

const FiatStrada = diametro > 1.4;
const FiatPanda = diametro <= 1.4 && diametro > 0.8;
const Fiat500 = FiatPanda && grosor < 0.25;
const FiatUno = FiatStrada && grosor < 0.4;

function RuedaFiat() {
  if (diametro = Fiat500 || FiatUno) 
    return ('El grosor por esta rueda es el inferior al recomendado');

  if (diametro = FiatStrada) 
    return ('La rueda es para un vehiculo grande');

  if (diametro = FiatPanda) 
    return ('La rueda es por un vehiculo mediano');

  return ('La rueda es para un vehiculo pequeno');
}
RuedaFiat();
