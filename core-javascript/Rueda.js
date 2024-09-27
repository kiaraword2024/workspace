/*let diametro =1.2
let grosor =0.2

function RuedaFiat(){
    if (diametro >1.4)
        return ("La rueda es para un vehiculo grande");
    else if(diametro <=1.4 && diametro > 0.8)
        return ("La rueda es por un vehiculo mediano");
    else if(diametro >1.4 && grosor >0.8)
        return("El grosor por esta rueda es el inferior al recomendado");
    else if(diametro <=1.4 && diametro > 0.8 && grosor <0.25)
        return("El grosor por esta rueda es el inferior al recomendado");
    else
    return ("La rueda es para un vehiculo pequeno");
  }

console.log(RuedaFiat());
*/
let diametro =0.7
let grosor =0.1
let FiatStrada = diametro >1.4
let FiatPanda = diametro <=1.4 && diametro > 0.8
let Fiat500 =FiatPanda && grosor <0.25
let FiatUno =FiatStrada && grosor <0.4

function RuedaFiat(){
    if(diametro = Fiat500 || FiatUno)
        return("El grosor por esta rueda es el inferior al recomendado");

    else if (diametro = FiatStrada)
    return ("La rueda es para un vehiculo grande");

    else if(diametro = FiatPanda)
        return ("La rueda es por un vehiculo mediano");

    else
    return ("La rueda es para un vehiculo pequeno");
}

console.log(RuedaFiat());
