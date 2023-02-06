const $img = document.querySelectorAll(".cards img");
console.log($img)
$img.forEach(img => {
    let src = Math.floor(Math.random() * 100) + 1
    img.setAttribute("src", `https://picsum.photos/id/${src}/200`)
})
