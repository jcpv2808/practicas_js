const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45","rotate-135");
console.log($card.classList.contains("rotate-45"));
console.log($card.classList.contains("rotate-135"));
$card.classList.add("sepia","opacity-80")
$card.classList.remove("sepia","opacity-80")
$card.classList.toggle("sepia","opacity-80")