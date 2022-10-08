import { programas, Animal } from "./funciones.js";
let lista = ["Dota 2","Poe","MC","Osu"];
//programas.mostrarTop(4,lista);

const animales = [
    {
        nombre: "Perro",
        numPatas: 4,
        tamaño: "mediano",
        habitat: "pradera",
        dieta: "carnivoro",
        tipoNac: "viviparo",
        clase: "mamifero",
        grupo: "vertebrado",
    },
    {
        nombre: "gato",
        numPatas: 4,
        tamaño: "pequeño",
        habitat: "pradera",
        dieta: "carnivoro",
        tipoNac: "viviparo",
        clase: "mamifero",
        grupo: "vertebrado",
    },
    {
        nombre: "conejo",
        numPatas: 4,
        tamaño: "pequeño",
        habitat: "bosque",
        dieta: "herbivoro",
        tipoNac: "viviparo",
        clase: "mamifero",
        grupo: "vertebrado",
    },
    {
        nombre: "hamster",
        numPatas: 4,
        tamaño: "diminuto",
        habitat: "sabana",
        dieta: "herbivoro",
        tipoNac: "viviparo",
        clase: "mamifero",
        grupo: "vertebrado",
    },
    {
        nombre: "gaviota",
        numPatas: 2,
        tamaño: "pequeño",
        habitat: "océano",
        dieta: "carnivoro",
        tipoNac: "oviparo",
        clase: "ave",
        grupo: "vertebrado",
    },
]

animales.forEach(e => new Animal(e).datos())