const contarCaracteres = (texto = "prueba") => {
    if(!texto){
        window.alert("No has ingresado ningun texto");
    }else{
        window.alert(`El texto que ingresaste tiene "${texto.length}" caracteres`)
    }
}

const textoElejido = (texto = "",cantidad) => {
    if(!texto){
        window.alert("No has ingresado ningun texto");
    }else{
        window.alert(texto.substring(0,cantidad));
    }       
}

const separarTexto = (texto = "",separador) => {
    if(!texto){ 
        window.alert("No has ingresado ningun texto");
    }else{
        let arrayTexto = texto.split(" ");//hola mundo
        for(let i = 0; i<arrayTexto.length;i++){
            window.alert(arrayTexto[i]+" "+ separador)
        }
        window.alert(arrayTexto)
    }
}

const repetirTexto = (texto = "",cantidadRepeticiones) => {
    if(!texto){
        window.alert("No has ingresado ningun texto");
    }else{
        for(let i = 0; i<cantidadRepeticiones;i++){
            window.alert(texto);
        }
    }
}
//objeto contenedor de funciones
export const programas = {
    contarCaracteres,
    textoElejido,
    separarTexto,
    repetirTexto
}