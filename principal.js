import productos from "./productos.js";

// Referencia
const principal = document.getElementById("productos")

principal.innerHTML = `<h2>${productos.tienda}</h2>`

// recorrer array producots

productos.articulos.forEach((articulo)=>{
    principal.innerHTML += `<img src="syrah.png" alt="">
    <h2>$</h2>
    <div>${articulo.titulo}Precio: $6000</div> 
    <p class="Varietal"></p>
    <p>Si eres amante del vino tinto con carácter y complejidad, el Syrah es una elección excelente 
        para explorar y disfrutar en una variedad de ocasiones y maridajes gastronómicos. </p>`
})