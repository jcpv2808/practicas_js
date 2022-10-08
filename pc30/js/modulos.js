import { programas } from "./funciones.js";
const array = ["xyz1","xyz2","xyz3","xyz4","xyz5"]
const array2 = ["1xyz","2xyz","3xyz","4xyz","5xyz"]
let palabra = "texto"
programas.invertirtexto("Hola Mundo")
programas.cantVecesRepetidas("Hola mUNdo, como esta eL mundo?","Mundo")
programas.validPalindromo("reconocer")
console.log(array)
programas.eliminarEleccion(array,"xyz")
console.log(array2)
programas.eliminarEleccion(array2,"xyz")
console.log(palabra.split(""))