const invertirtexto = (cadena) => {
    let xcadena =cadena.split("").reverse().join("")
    console.log(xcadena)
}

const cantVecesRepetidas = (cadena,texto) => {
    let i = 0;
    let contador = 0;
    let xcadena = cadena.toLowerCase();
    let xtexto = texto.toLowerCase();
    while(i!==-1){
        i = xcadena.indexOf(xtexto,i);
        if(i!==-1){
            i++;
            contador++;
        }
    }
    console.log(contador);
}

const validPalindromo = (cadena) => {
    cadena = cadena.toLowerCase();
    let xcadena = cadena.split("").reverse().join("");
    const resultado = xcadena === cadena ? console.log("La palabra ingresada es 'SI' es un palindromo") : console.log("La palabra ingresada es 'NO' es un palindromo");
    return(resultado);
}

const eliminarEleccion = (array,texto) => {
    let storageArray = [];
    array.forEach(e => storageArray.push(e.split(texto).join("")));
    console.log(storageArray);
}

export const programas = {
    invertirtexto,
    cantVecesRepetidas,
    validPalindromo,
    eliminarEleccion,
}
