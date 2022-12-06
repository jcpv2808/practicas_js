const $linkDOM = document.querySelector(".link-dom")
console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.color)
console.log(window.getComputedStyle($linkDOM))
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))

$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.fontSize = "80pxD"
