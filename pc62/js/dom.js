const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardcontent = [
        {
            tittle:"Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            tittle:"Personas",
            img: "https://placeimg.com/200/200/people",
        },
        {
            tittle:"Animals",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            tittle:"Tecnologia",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            tittle:"Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        }
    ];

    cardcontent.forEach(e => {
        $template.querySelector("img").setAttribute("src",e.img);
        $template.querySelector("img").setAttribute("alt",e.tittle);
        $template.querySelector("figcaption").textContent = e.tittle;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone); 
    })
    $cards.appendChild($fragment);