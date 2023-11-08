import productos from "./productos.js";

// Referencia
const principal = document.getElementById("productos")

let contenidoinyectar = ``;
principal.innerHTML = `<h2></h2>`

// recorrer array producots

productos.articulos.forEach((articulo)=>{
    principal.innerHTML += `<div class="tarjeta">
    <img src=${articulo.imagen} alt="">
    <h2>${articulo.titulo}</h2>
    <div>${articulo.precio}</div> 
    <p class="Varietal"></p>
    <p>${articulo.descripcion}</p>
    <button>${articulo.agregar}</button>                  
</div>`
})

fetch("./productos.json").then((datos)=>{
    return datos.json()
}).then((datos)=>{
    console.log(datos)
})