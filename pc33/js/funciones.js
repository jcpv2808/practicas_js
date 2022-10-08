const decimalBinario = (n,base=10) => {
    if(!n) return console.warn("No se ingreso ningun numero")
    if(typeof n !== "number") return console.warn(`${n} no es un numero`)
    if(!base) return console.warn("No se ingreso ninguna base valida")
    if(typeof base !== "number") return console.warn(`${base} no es una base valida`)
    let decimalBase = n.toString(base);
    console.log(`El numero '${n}' en base '${base}' es: ${decimalBase}`)
}

const descuento = (n,descuento = 0) =>{
    if(!n) return console.warn("No se ingreso ningun numero")
    if(typeof n !== "number") return console.warn(`${n} no es un numero`)
    if(typeof descuento !=="number")return console.warn(`${descuento} no es un descuento`)
    let resultado = descuento === 0 
        ? n 
        : n-(n*(descuento/100));
    resultado === n 
        ? console.log(`Precio actual: ${n}`)
        : console.log(`Precio actual: ${n}, Precio con descuento: ${resultado}`)
    
}
const añosDesde = (fecha) =>{
    if(!fecha)return console.warn("Ingrese una fecha porfavor")
    //if(typeof fecha === "date")return console.warn(`${fecha} no es una fecha`)
    fecha = Date.parse(fecha)
    let hoy = Date.now()
    let tiempoTranscurrido = Math.floor((hoy - fecha)/60/60/24/365/1000)//m/h/d/a/redondeo a solo años - 2 primeros digitos desde la izquierda
    console.log(tiempoTranscurrido)
}
export const programas = {
    decimalBinario,
    descuento,
    añosDesde,
}
