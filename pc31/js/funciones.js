const numAleatorio = (min,max) =>{
    if(!min)return console.warn("No ingresaste un minimo")
    if(!max)return console.warn("No ingresaste un maximo");

    let resultado = Math.round(Math.random()*(max-min)+min);
    console.log(resultado);
}

const numCapicua = (num) => {
    if(!num)return console.warn("No ingresaste un numero")

    if(typeof num !== "number")return console.warn("No ingresaste un valor numerico")

    num = String(num);
    let xnum = num.split("").reverse().join("");
    const resultado = xnum === num
        ? console.log(`El numero ${xnum} si es Capicua`)
        : console.log(`El numero ${xnum} no es Capicua`);
    return(resultado);
}

const numFactorial = (num) => {
    if(!num)return console.warn("No ingresaste un numero")
    if(typeof num !== "number")return console.warn("No ingresaste un valor numerico")
    if(num === 0)return console.warn("El numero no puede ser 0")
    if(num < 0)return console.warn("El numero no puede ser negativo")
    let almacen = 1;
    for(let i = 1 ; i<=num ; i++){
        almacen *= i;
    }
    console.log(almacen)
}

export const programas = {
    numAleatorio,
    numCapicua,
    numFactorial,
}