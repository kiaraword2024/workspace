let Habitantes = 2500;

if(Habitantes > 5000){
    console.log("Roma");
} else if(Habitantes > 3000)
    console.log("Castelli")
else{
    console.log("Viterbo")
}

console.log(Habitantes);

let Kiara = {
    altura:1.60,
    edad:41
};
for(let property in Kiara){
    console.log(property, Kiara[property]);
}

