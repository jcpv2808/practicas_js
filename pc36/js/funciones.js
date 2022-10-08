const objAscDes = (array) => {
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
    const minArray = [],asc=[], des=[];
    

    for(let i = array.length; i > 0; i--){
        //variables
        let indexMax = array.indexOf(Math.max(...array))
        des.push(array[indexMax])
        minArray.push(array[indexMax])
        array.splice(indexMax,1)
    }
    console.log(minArray)
    for(let i = minArray.length; i>0 ; i--){
        let indexMin = minArray.indexOf(Math.min(...minArray))
        asc.push(minArray[indexMin])
        minArray.splice(indexMin,1)
    }

    const objAscDes = {
        asc,
        des
    };
    console.log(objAscDes)
    console.log(`Asc: ${asc} - - - Des: ${des}`)   
}
//[0,0,4,1,1,4] - - - - - largo = 6
const duplicados = (array) =>{
    //errores ini
    if(!array)return console.warn("No ingresaste ningun grupo de numeros")
    if(array.length === 0) return console.warn("El grupo de numeros esta vacio")
    if(array.length ===1) return console.warn("El grupo de numeros contiene un solo numero")
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
        console.log(`Se encontraron ${errores} errores: ${arrayErrores.join(", ")}`)
        arrayErrores.forEach(e => console.log(`El elemento "${e}" es un: "${typeof e}"`))
    }
    //errores fin

    let resultado = new Set(array)
    console.log(resultado)
}

const promedio = (array) =>{
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
        console.log(`Se encontraron ${errores} errores: ${arrayErrores.join(", ")}`)
        arrayErrores.forEach(e => console.log(`El elemento "${e}" es un: "${typeof e}"`))
    }//errores fin
    //array = [0,0,4,1,1,4,2]
    else{
        let suma = 0;
        array.forEach(e => suma+=e)
        let promedio = suma/array.length
        return console.log(`El promedio de los numeros ${array} es: "${promedio}" `)
    }
}

export const programas = {
    objAscDes,
    duplicados,
    promedio,
}