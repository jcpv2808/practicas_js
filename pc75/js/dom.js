const $divs_eventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a")
console.log($divs_eventos)

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
};

$divs_eventos.forEach(div => {
    div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", e =>{
    alert("dirigiendose a youtube...");
    e.preventDefault();
    //evita que se ejecute el comportamiento por defecto del elemento asignado. Eje: evita que un enlace te redirija
    e.stopPropagation();
    //evita la propagacion
});