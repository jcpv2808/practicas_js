console.log("incio")
/*setTimeout(() =>{
    console.log("setTimeout, ejecutando este codigo despues de 3000 milisegundos(3 segundos)")
},3000);*/
/*setInterval(() =>{
    console.log("setInterval, ejecutando este codigo cada de 3000 milisegundos(3 segundos)")
},3000)*/
//para usar clearTimeout o clearInterval se nesecita almacenar el setTimeout o el setInterval en una variable
let timeout = setTimeout(() =>{
    console.log("setTimeout, ejecutando este codigo despues de 3000 milisegundos(3 segundos)")
},3000);
let interval = setInterval(() =>{
    console.log("setInterval, ejecutando este codigo cada de 3000 milisegundos(3 segundos)")
},3000)

clearTimeout(timeout)
console.log("antes que yo habia una timeout")
clearInterval(interval)
console.log("antes que yo habia una intervalo")