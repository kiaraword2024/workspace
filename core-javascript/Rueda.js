
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
