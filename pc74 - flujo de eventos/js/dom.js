const $divs_eventos = document.querySelectorAll(".eventos-flujo div");
console.log($divs_eventos)

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
};

$divs_eventos.forEach(div => {
    div.addEventListener("click", flujoEventos,{
        capture: false,//burbuja
        once: true,//hace que se ejecute el evento una sola vez
    });
});
//false indica fase de burbuja(del mas interno al mas extreno)
//true indica fase de carptura(del mas externo al mas interno)
//por defecto siempre se esta en fase de burbuja
