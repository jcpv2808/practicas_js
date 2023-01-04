const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document. createElement("figcaption"),
    $figcaption_text = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaption_text);
$figure.append($img),
$figure.append($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//añadiendo contenido al DOM con un forEach recorriendo los elementos de un array
const estaciones = ["primavera", "verano", "otoño", "invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);
estaciones.forEach(e => {
    const $li = document.createElement("li");
    $li.textContent = e;
    $ul.append($li)
});
//añadiendo contenido al DOM con un forEach recorriendo los elementos de un array añadiendo codigo HTML dentro de $ul2
const clientes = ["Jean", "Juan", "Jonathan"],
    $ul2 = document.createElement("ul");

document.write("<h3>Clientes Actuales</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
clientes.forEach(e => $ul2.innerHTML += `<li>${e}</li>`);

//añadiendo contenido a DOM con un elemento - mejor opcion
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(e => {
    const $li = document.createElement("li");
    $li.textContent = e;
    $fragment.appendChild($li);
})
document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.append($ul3);