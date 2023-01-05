const $cards = document.querySelector(".cards"),
    $newcard = document.createElement("figure"),
    $clone_cards = $cards.cloneNode(true)

$newcard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption>Any</figcaption>
`;

$newcard.classList.add("card");

//$cards.replaceChild($newcard, $cards.children[2])
//$cards.insertBefore($newcard, $cards.firstElementChild)
//$cards.removeChild($cards.lastElementChild)

document.body.appendChild($clone_cards);