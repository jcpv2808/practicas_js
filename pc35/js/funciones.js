const arrayCuadrado = (array) => {
    //errores ini
    if(!array)return console.warn("No ingresaste ningun grupo de numeros")
    if(array.length === 0) return console.warn("El grupo de numeros esta vacio")
    let errores = 0;
    let arrayErrores = [];
    console.log(`Los numeros a procesar son ${array}`)

    for(let i =0; i < array.length; i++){
        if (typeof array[i] !== "number") {
            console.warn(`'${array[i]}' no es un numero`)
            arrayErrores.push(array[i])
            errores++
        }else{
            console.log(`'${array[i]}' es correcto`)
        }
    }

    if(errores != 0){
        return (console.log(`Se encontraron ${errores} errores: ${arrayErrores.join(", ")}`))
    }
    //errores fin

    let arrayC = array.map(e => Math.pow(e,2))

    let respuesta = `Los numeros ${array} al cuadrado serian: ${arrayC}`
    return console.log(respuesta);

}
const numMayorMenor = (array) => {
    //errores ini
    if(!array)return console.warn("No ingresaste ningun grupo de numeros")
    if(array.length === 0) return console.warn("El grupo de numeros esta vacio")
    let errores = 0;
    let arrayErrores = [];
    console.log(`Los numeros a procesar son ${array}`)

    for(let i =0; i < array.length; i++){
        if (typeof array[i] !== "number") {
            console.warn(`'${array[i]}' no es un numero`)
            arrayErrores.push(array[i])
            errores++
        }else{
            console.log(`'${array[i]}' es correcto`)
        }
    }

    if(errores != 0){
        return (console.log(`Se encontraron ${errores} errores: ${arrayErrores.join(", ")}`))
    }
    //errores fin

    let mayor = Math.max(...array);
    let menor = Math.min(...array);

    console.log(`El numero mayor en: ${array} es ${mayor}, y el menor: ${menor}`)
}
const objParImpar = (array) => {
    //errores ini
    if(!array)return console.warn("No ingresaste ningun grupo de numeros")
    if(array.length === 0) return console.warn("El grupo de numeros esta vacio")
    let errores = 0;
    let arrayErrores = [];
    console.log(`Los numeros a procesar son ${array}`)

    for(let i =0; i < array.length; i++){
        if (typeof array[i] !== "number") {
            console.warn(`'${array[i]}' no es un numero`)
            arrayErrores.push(array[i])
            errores++
        }else{
            console.log(`'${array[i]}' es correcto`)
        }
    }

    if(errores != 0){
        return (console.log(`Se encontraron ${errores} errores: ${arrayErrores.join(", ")}`))
    }
    //errores fin
    let pares = [];
    let impares = [];
    const objParImp = {
        pares,
        impares,
    }
    array.forEach(e => e%2 === 0 ?objParImp.pares.push(e) :objParImp.impares.push(e))
    let respuesta = console.log(`Pares: ${objParImp.pares.join(", ")} --- Impares: ${objParImp.impares.join(", ")}`);
    console.log(objParImp)
    return respuesta;
}

export const programas = {
    arrayCuadrado,
    numMayorMenor,
    objParImpar

}