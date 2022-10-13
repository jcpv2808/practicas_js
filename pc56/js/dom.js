console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang = "es"
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang","es-MX")
console.log(document.documentElement.lang)

const linkDom = document.querySelector(".link-dom")