function holaMundo() {
    alert("Hola Mundo")
    console.log(event)
}
function saludar(nombre = "Desconocido"){
    alert(`Hola ${nombre} - ${event}`);
}
const $event_semantico = document.getElementById("btn_semantico"),
    $event_multiple = document.getElementById("btn_multiple"),
    $event_remover = document.getElementById("btn_remover");

$event_semantico.onclick = holaMundo;
$event_semantico.onclick = function(e){
    alert("Hola Mundo Semantico");
    console.log(e);
    console.log(event);
};

$event_multiple.addEventListener("click", holaMundo);
$event_multiple.addEventListener("click", (e) =>{
        alert("Hola mundo Multiple");
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(event);
    });

$event_multiple.addEventListener("click", () => {
    saludar();
    saludar("Jean");
});

const removerDblclick = (e) =>{
    alert(`Removiendo el evento de tipo: ${e.type}`);
    console.log(e);
    $event_remover.removeEventListener("dblclick", removerDblclick);
    $event_remover.disabled = true;
};

$event_remover.addEventListener("dblclick", removerDblclick)

