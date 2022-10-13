console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang = "es"
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang","es-MX")
console.log(document.documentElement.lang)

const $linkDom = document.querySelector(".link-dom")

$linkDom.setAttribute("target","_blank")
$linkDom.setAttribute("rel","noopener")
$linkDom.setAttribute("href","https://www.youtube.com")

console.log($linkDom.hasAttribute("rel"))
$linkDom.removeAttribute("rel")
console.log($linkDom.hasAttribute("rel"))

//data -attributes
console.log($linkDom.getAttribute("data-description"))
console.log($linkDom.dataset)
console.log($linkDom.dataset.description)
$linkDom.setAttribute("data-description","Modelo de Objeto del Documento")
console.log($linkDom.dataset.description)
$linkDom.dataset.description = "Link para ir a YouTube"
console.log($linkDom.dataset.description)
console.log($linkDom.hasAttribute("data-id"))
$linkDom.removeAttribute("data-id")
console.log($linkDom.hasAttribute("data-id"))
