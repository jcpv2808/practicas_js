const $que_es_DOM = document.getElementById('que-es')
let text = `
<p>El modelo de obejtos del documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML</p>
<p>Este provee una representacion estructural del documento, permitiendo modificar  su contenido  y presentacion  visual mediante codigo JS</p>
<p>
    <mark>El DOM no es parte de la especificaion de JavaScript, es una API par a los navegadores</mark>
</p>
`;

//$que_es_DOM.innerText = text
$que_es_DOM.textContent = text
$que_es_DOM.innerHTML = text
$que_es_DOM.outerHTML = text
