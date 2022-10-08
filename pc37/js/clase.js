class Pelicula {
    constructor({id, titulo, director, estreno, pais, genero, calificacion}){
        this.id = id
        this.titulo = titulo
        this.director = director
        this.estreno = estreno
        this.pais = pais
        this.genero = genero    
        this.calificacion = calificacion

        this.validarIMDB(id)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarEstreno(estreno)
        this.validarPais(pais)
        this.validarGeneros(genero)
        this.validarCalificacion(calificacion)
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros().join(", ")}`)
    }

    validarTexto(propiedad,value){
        if(!value)return console.warn(`${propiedad} ${value} esta vacio`)
        if(typeof value !== "string")return console.warn(`${value} no es una cadena de texto`)
        return true
    }

    validarNumero(propiedad,value){
        if(!value)return console.warn(`${propiedad} ${value} esta vacio`)
        if(typeof value !== "number")return console.warn(`${value} no es un numero`)
        return true
    }

    validarArray(propiedad,value){
        let regex = /[a-zA-Z ]*/gi
        if(!value) return console.warn(`${propiedad} ${value} esta vacio`)
        if(!(value instanceof Array)) return console.warn(`${propiedad} ${value} NO es un arreglo`)
        if(value.length === 0) return console.warn(`${propiedad} ${value} no contiene ningun elemento`)
        for(let cadena of value){
            if(!(regex.test(cadena)))return console.warn(`El valor ${cadena} no es un texto`)
        }
        return true
    }

    validarIMDB(id){
        let regex = /^([a-z]{2}[0-9]{7})$/gi.test(id)
        if(this.validarTexto("IMDB id",id)){
            if(!regex){
                return console.warn(`La 2 digitos del id deben ser letras y los 7 restantes deben ser numeros `)
            }
        }
    }

    validarTitulo(titulo){
        let regex = /[a-zA-Z0-9 ]{0,100}/gi.test(titulo)
        if(this.validarTexto("Titulo",titulo)){
            if(!regex){
                return console.warn(`El titulo debe contener como maximo 100 characteres`)
            }
        }
    }

    validarDirector(director){
        let regex = /^[a-zA-Z0-9]{0,50}$/gi.test(director)
        if(this.validarTexto("Director",director)){
            if(!regex){
                return console.warn(`El Director debe contener como maximo 50 characteres`)
            }
        }
    }

    validarEstreno(estreno){
        let regex = /^[0-9]{4}$/gi.test(estreno)
        if(this.validarNumero("Año de estreno",estreno)){
            if(!regex){
                return console.warn(`El año de estreno debe tener 4 digitos`)
            }
        }
    }

    validarPais(pais){
        this.validarArray("Pais",pais)
    }

    validarGeneros(generos){
        if(this.validarArray("Genero",generos)){
            for(let genero of generos){
                if(!(Pelicula.listaGeneros.includes(genero))) return console.warn(`El genero ${genero} no esta en la lista de generos permitidos`),console.log(`Los generos permitidos son: ${Pelicula.listaGeneros.join(", ")}`)
            }
        }
    }
    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion",calificacion)){
            return (calificacion < 0 || calificacion > 10)
                ? console.warn(`La calificacion tiene que ser mayor a 0 y menor que 10`)
                : this.calificacion = calificacion.toFixed(1);
        }
    }

    ficaTecnica(){
        console.log(`Ficha Tecnica:\nTitulo: ${this.titulo}\nDirector: ${this.director}\nEstreno: ${this.estreno}\nPais: ${this.pais.join(", ")}\nGenero: ${this.genero.join(", ")}\nCalificacion: ${this.calificacion}\nId: ${this.id}`)
    }
}

/*const peli = new Pelicula({
    id: "dd1234567",
    titulo: "Yo soy el titulo",
    director: "Director1",
    estreno: 2022,
    pais: ["Peru","Argentina"],
    genero: ["Horror","Action"],
    calificacion: 9.5888,
})
peli.ficaTecnica()
*/

const cartelera = [
    {
        id: "dd1234567",
        titulo: "The movie",
        director: "Director1",
        estreno: 2022,
        pais: ["Peru","Argentina"],
        genero: ["Horror","Action"],
        calificacion: 9.5888,
    },
    {
        id: "dd1234567",
        titulo: "The movie 2: Are u Dumb on Purpose",
        director: "Director2",
        estreno: 2022,
        pais: ["Peru","Argentina"],
        genero: ["Horror","Action"],
        calificacion: 9.5888,},
    {
        id: "dd1234567",
        titulo: "Fuck you - The prequel to 'The Movie'",
        director: "Director3",
        estreno: 2022,
        pais: ["Peru","Argentina"],
        genero: ["Horror","Action"],
        calificacion: 9.5888,
    },
    {
        id: "dd1234567",
        titulo: "Fuck you Excuse me - The sequel to the prequel to 'The Movie'",
        director: 5,
        estreno: 2022,
        pais: ["Peru","Argentina"],
        genero: ["Horror","Action"],
        calificacion: 9.5888,
    }
]

cartelera.forEach(e => new Pelicula(e).ficaTecnica())
