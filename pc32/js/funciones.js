const numPrimo = (n) => {
    if(!n)return console.warn("No ingresaste ningun numero")
    if(typeof n !== "number") return console.warn("No ingresaste un valor numerico")
    if(n <= 0) return console.log(`El numero ${n} no es primo`)

    for (let i = 2; i < n;i++)
        if(n%i==0)return console.log(`El numero ${n} no es primo`);
    return console.log(`El numero ${n} si es primo`);
}

const numParImpar = (n) => {
    if(!n)return console.warn("No ingresaste ningun numero")
    if(typeof n !== "number") return console.warn("No ingresaste un valor numerico")

    let resultado = (n/2) - Math.floor(n/2) > 0
        ? console.log(`El numero ${n} es impar`) 
        : console.log(`El numero ${n} es par`)
    return(resultado)
}

const converGrados = (n,grados)=>{
    const cel = (n * 9/5) + 32;
    const far = (n - 32) * 5/9;
    if(grados === "C")return console.log(cel)
    if(grados === "F")return console.log(far)
    
    if(!n)return console.warn("No ingresaste ningun numero");
    if(typeof n !== "number") return console.warn("No ingresaste un valor numerico");
    if(!grados)return console.warn("No ingresaste el grado al que deseas convertir");
    if(grados !== "C" || grados !=="F") return console.warn("No ingresaste una medicion correcta");    
}

export const programas = {
    numPrimo,
    numParImpar,
    converGrados,
}