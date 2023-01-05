/*
    .insertAdjacent...
        .insertAdjacentElement(position, elemento)
        .insertAdjacentHTML(position, html)
        .insertAdjacentText(position, text)

    .Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afterend(hermano siguiente)

*/
const $cards = document.querySelector(".cards"),
    $newcard = document.createElement("figure");

let $content_card =
 `
<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption></figcaption>
`;

$newcard.classList.add("card");
$newcard.insertAdjacentHTML("afterbegin",$content_card);
$newcard.querySelector("figcaption").insertAdjacentText("beforeend", "Hola")
//$cards.insertAdjacentElement("afterbegin",$newcard);

//$cards.prepend($newcard);
//$cards.before($newcard);
//$cards.append($newcard);
//$cards.after($newcard);
