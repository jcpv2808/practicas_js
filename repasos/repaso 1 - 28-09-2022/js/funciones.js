const mostrarTop = (cant,array) => {
    if(!cant) console.error("Defina cuantos juegos desea ver")
    if(typeof(cant)!= "number") console.error("La cantidad no es un numero")
    const aux = [];
    for(let i=0; i<cant;i++){
        aux.push(array[i]);
    }
    let msg = aux.join(", ")
    return console.warn(msg);  
}

export class Animal {
    //nombre
        //el nombre debe ser un texto
    //patas
        //verificar que el numero de patas no sea impar
        //el dato ingresado debe ser un numero par
    //tamaño
        //los tamaños aceptados deben ser: diminuto,pequeño,mediano,grande,colosal
        //el dato ingresado debe ser un texto
    //habitat
        //los habitats aceptados son: Pradera, Bosque, Desierto, Montaña, Marisma, Sabana, Región polar, Altiplano, Quebrada, Lago, Pantano, Río, Arrecife de coral, Océano, Playa 
        //validar que el dato ingresado sea un texto
    //dieta
        //dietas aceptadas: herbivoro, carnivoro, omnivoro, insectivoro
        //el dato ingresado debe ser de tipo texto
    //tipoNac
        //los tipos de nacimiento aceptados son: viviparo, oviparo
        //el dato ingresado debe ser un texto
    //clase
        //las clases aceptadas son: mamifero, ave, reptil, anfibio, acuatico, insectos
        //el dato ingresado debe ser un texto
    //grupo
        //grupos aceptados: vertebrado o invertebrado
        //el dato ingresado debe ser un texto
    //VALIDAR QUE SE HAYAN INGRESADO TODOS LOS DATOS REQUERIDOS

    constructor({nombre, numPatas, tamaño, habitat, dieta, tipoNac, clase, grupo}){
        this.nombre = nombre;
        this.numPatas = numPatas;
        this.tamaño = tamaño;
        this.habitat = habitat;
        this.dieta = dieta;
        this.tipoNac = tipoNac;
        this.clase = clase;
        this.grupo = grupo;

        this.validarNombre(nombre);
        this.validarPatas(numPatas);
        this.validarTamaño(tamaño);
        this.validarHabitat(habitat);
        this.validarDieta(dieta);
        this.validartipoNac(tipoNac);
        this.validarClase(clase);
        this.validarGrupo(grupo);
    }

    validarTexto(propiedad,dato){
        if(!dato) return console.warn(`${propiedad} esta vacio`)
        if(typeof(dato) != "string") return console.warn(`El valor ${dato}, ingresado en el campo ${propiedad} no es un texto`)
        return true
    }

    validarNumero(propiedad,dato){
        if(!dato) return console.warn(`${propiedad} esta vacio`)
        if(typeof(dato) != "number") return console.warn(`El valor ${dato}, ingresado en el campo ${propiedad} no es un numero`)
        return true
    }

    validarNombre(nombre){
        this.validarTexto("Nombre",nombre)
    }

    validarPatas(numPatas){
        let regex = /[0,2,4,6,8]/gi.test(numPatas);
        if(this.validarNumero("Numero de Patas",numPatas)){
            if(regex === false){
                console.warn(`El numero de patas no puede ser un numero impar`)
            }
        }
    }

    validarTamaño(tamaño){
        const aceptados = ["diminuto","pequeño","mediano","grande","colosal"];
        
        if(this.validarTexto("Tamaño",tamaño)){
            if(aceptados.includes(tamaño) != true){
                return console.warn(`"${tamaño}" no es valido. Los unicos tamaños aceptados son: ${aceptados.join(", ")}`)
            }
        }
    }

    validarHabitat(habitat){
        const aceptados = ["pradera", "bosque", "desierto", "montaña", "marisma", "sabana", "región polar", "altiplano", "quebrada", "lago", "pantano", "río", "arrecife de coral", "océano", "playa"]

        if(this.validarTexto("Habitat",habitat)){
            if(aceptados.includes(habitat) != true){
                return console.warn(`"${habitat}" no es valido. Los unicos habitats aceptados son: ${aceptados.join(", ")}`)
            }
        }
    }

    validarDieta(dieta){
        const aceptados = ["herbivoro", "carnivoro", "omnivoro", "insectivoro"]

        if(this.validarTexto("Dieta",dieta)){
            if(aceptados.includes(dieta) != true){
                return console.warn(`"${dieta}" no es valido. Las dietas aceptadas son: ${aceptados.join(", ")}`)
            }
        }
    }

    validartipoNac(tipoNac){
        const aceptados = ["viviparo", "oviparo"]

        if(this.validarTexto("Dieta",tipoNac)){
            if(aceptados.includes(tipoNac) != true){
                return console.warn(`"${tipoNac}" no es valido. Los tipos de nacimiento aceptados son: ${aceptados.join(", ")}`)
            }
        }
    }

    validarClase(clase){
        const aceptados = ["mamifero", "ave", "reptil", "anfibio", "acuatico", "insectos"]

        if(this.validarTexto("Clase",clase)){
            if(aceptados.includes(clase) != true){
                return console.warn(`"${clase}" no es valido. Las clases aceptadas son: ${aceptados.join(", ")}`)
            }
        }
    }

    validarGrupo(grupo){
        const aceptados = ["vertebrado", "invertebrado"]

        if(this.validarTexto("Grupo",grupo)){
            if(aceptados.includes(grupo) != true){
                return console.warn(`"${grupo}" no es valido. Los grupos aceptados son: ${aceptados.join(", ")}`)
            }
        }
    }

    datos(){
        console.log(`Nombre: ${this.nombre}\nNumero de Patas: ${this.numPatas}\nTamaño: ${this.tamaño}\nHabitat: ${this.habitat}\nDieta: ${this.dieta}\nTipo de nacimiento: ${this.tipoNac}\nClase: ${this.clase}\nGrupo: ${this.grupo}`)
    }
}
export const programas = {
    mostrarTop,
}