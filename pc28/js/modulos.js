import saludo, {PI} from "./variables.js";
import {calculo} from "./aritmetica.js"
saludo();
console.log("Estoy dentro de un archivo modulo");
console.log(PI);
console.log(calculo.suma(10,15));//25
console.log(calculo.multiplicacion(10,15));//150
console.log(calculo.resta(10,3));//7
console.log(calculo.division(10,2));//5
console.log(calculo.resto(15,2))//1
