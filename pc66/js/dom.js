function holaMundo() {
    alert("Hola Mundo")
    console.log(event)
}
function saludar(nombre){
    if(!nombre) return `Hola Desconocido`;
    alert(`Hola ${nombre}`);
    console.log()
}
const $event_semantico = document.getElementById("btn_semantico"),
    $event_multiple = document.getElementById("btn_multiple");

//$event_semantico.onclick = holaMundo;
$event_semantico.onclick = (e) => {
    alert("Hola Mundo Semantico");
    console.log(e);
};

//$event_multiple.addEventListener("click", holaMundo);
$event_multiple.addEventListener("click", (e) =>{
        alert("Hola mundo Multiple")
        console.log(e)
        console.log(e.type)
        console.log(e.target)
        console.log(event)
    });

