import { programas } from "./funciones.js";

let eleccion = prompt("Elije el programa que desea usar(1, 2, 3, 4): ");
let texto = prompt("Ingrese el texto que desea analizar:");

let xeleccion = parseInt(eleccion);
while(xeleccion < 1||xeleccion>4){
    window.alert("Ingrese un programa porfavor")
}
switch(xeleccion){//SWITCH SOLO USA VALORES DE TIPO INTEGER - NO PUEDEN SER STRINGS-BOOLEANS-FLOATS-ETC
    case 1:
        programas.contarCaracteres(texto);
        break;
    case 2:
        const cantidadRepeticiones = prompt("Ingrese la cantidad de veces que desea repetir el texto:");
        programas.repetirTexto(texto,cantidadRepeticiones);
        break;
    case 3:
        const separador = prompt("Ingrese el separador que desea utilizar:");
        programas.separarTexto(texto,separador);
        break;
    case 4:
        const cantidad = prompt("Ingrese la cantidad de caracteres que desea:");
        programas.textoElejido(texto,cantidad);
        break;
}
