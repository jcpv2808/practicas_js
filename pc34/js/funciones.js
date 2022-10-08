const vocCons = (texto) => {
    //control de errores
    if(!texto)return console.warn(`No ingreso un texto para evaluar`);
    if(typeof texto !== "string")return console.warn(`${texto} no es un texto`);
    //cuerpo de la funcion
    let arrayTexto = texto.toLowerCase().split("");
    arrayTexto.forEach(e => e === " " ? arrayTexto.splice(arrayTexto.indexOf(e),1): e = e);
    arrayTexto.join("");
    let v = 0, c = 0, regex = /[aeiou]+/g;
    arrayTexto.forEach(e => regex.test(e) ?v++ :c++);
    console.log(texto);
    console.log(`El texto: '${texto}', tiene '${v}' vocales y '${c}' consonantes`);
}

const nombreValido = (texto) => {
    //control de errores
    if(!texto)return console.warn(`No ingreso un texto para evaluar`);
    if(typeof texto !== "string")return console.warn(`${texto} no es un texto`);
    //cuerpo de la funcion
    let regex = /[a-zA-Z]+\s/g
    regex.test(texto) 
        ? console.log(`El nombre: ${texto}, SI es un nombre valido`) 
        : console.log(`El nombre: ${texto}, NO es un nombre valido`)
}

const correoValido = (texto) => {
    //control de errores
    if(!texto)return console.warn(`No ingreso un texto para evaluar`);
    if(typeof texto !== "string")return console.warn(`${texto} no es un texto`);
    //cuerpo de la funcion
    let regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+/g;
    regex.test(texto)
        ? console.log(`El correo: ${texto}, SI es un correo valido`)
        : console.log(`El correo: ${texto}, NO es un correo valido`)
    console.log(texto);
}
export const programas = {
    vocCons,
    nombreValido,
    correoValido, 
}