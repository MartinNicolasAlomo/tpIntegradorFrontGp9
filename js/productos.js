// =================    OBTENER/CREAR EL CARRITO E INICIALIZARLO   =================
// Crea el array carrito[] y obtiene los datos del localStorage, o si no existe, lo inicializa
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



// =================    OBTENER/CREAR EL CARRITO E INICIALIZARLO   =================
// Crea el array carrito[] y obtiene los datos del localStorage, o si no existe, lo inicializa
const urlProducts = "http://localhost:3000/api/";


// =================    CREAR  =================
// Crea el array lsitaProductos[]
let listaProductos = [];


async function mostrarProductos() {
    try {
        let respuesta = await fetch(`${urlProducts}products`);
        let datos = await respuesta.json();

        listaProductos = datos.payload; // Guardamos el array de productos

        let contenedorPeliculas = document.querySelector(".contenedor-peliculas");
        let contenedorSeries = document.querySelector(".contenedor-series");
        let htmlPeliculas = "";
        let htmlSeries = "";

        listaProductos.forEach(producto => {
            let carta = `
            <div class="carta-producto">
                <div class="contenedor-imagen-producto">
                    <img class="imagen-producto" src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="contenedor-nombre-producto">
                    <h3 class="nombre-producto">${producto.nombre}</h3>
                </div>
                <div class="contenedor-precio-producto">
                    <p class="precio-producto">$${producto.precio.toFixed(2)}</p>
                </div>
                <div class="contenedor-boton-producto">
                    <button class="boton-agregar-producto" data-id="${producto.id}">Agregar</button>
                    <button class="boton-eliminar-producto" data-id="${producto.id}">Eliminar</button>
                </div>
            </div>
        `;

            if (producto.categoria === "Película") htmlPeliculas += carta;
            else if (producto.categoria === "Serie") htmlSeries += carta;
        });

        contenedorPeliculas.innerHTML = htmlPeliculas;
        contenedorSeries.innerHTML = htmlSeries;

        document.querySelectorAll(".boton-agregar-producto").forEach(boton => {
            boton.addEventListener("click", function () {
                const id = parseInt(this.dataset.id);
                agregarAlCarrito(id)
            });
        });

        document.querySelectorAll(".boton-eliminar-producto").forEach(boton => {
            boton.addEventListener("click", function () {
                const id = parseInt(this.dataset.id);
                eliminarDelCarrito(id);
            });
        });

        document.querySelectorAll(".imagen-producto").forEach(imagen => {
            imagen.addEventListener("click", function () {
                window.open(imagen.src, '_blank');
            });
        });
    } catch (error) {
        console.error("Error", error);
    }
}


// =================    AGREGAR, ELIMINAR Y GUARDAR CARRITO    =================
// agregarAlCarrito() busca si el producto ya se encuentra en el carrito. 
//  Si ya se encuentra en el carrito, solo le aumenta la cantidad +1, pero si es nuevo, lo agrega completo
// eliminarDelCarrito() tambien busca si el producto ya se encuentra en el carrito. 
//  Si ya se encuentra en el carrito, le reduce la cantidad +1, y si la cantidad alcanza 0, lo elimina completo del carrito
//  y si no existe pone un alert para notificarlo
// guardarCarrito() transforma el array en formato JSON y lo guarda en el localStorage
function agregarAlCarrito(id) {
    let producto = listaProductos.find(producto => producto.id === id);
    let productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente) productoExistente.cantidad += 1;
    else carrito.push({ ...producto, cantidad: 1 });

    guardarCarrito(carrito);
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarDelCarrito(id) {
    let productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente) {
        productoExistente.cantidad -= 1;
        if (productoExistente.cantidad <= 0) {
            carrito = carrito.filter(producto => producto.id !== id);   //      AGREGAR     TOAST
        }
    }
    else alert("El producto no se encuentra en el carrito");

    guardarCarrito(carrito);
}



// =================    FILTRAR PRODUCTO    =================
// la funcion registra el input del usuario cuando escribe el nombre de un producto en la barra de busqueda
// y va mostrando los resultados que coinciden con lo ingresado.
// Cuando se borra la busqueda muestra el array original
let barraBusqueda = document.querySelector(".barra-busqueda");
barraBusqueda.addEventListener("keyup", filtrarProductos);

function filtrarProductos() {
    let valorInput = barraBusqueda.value;
    let productosFiltrados = listaProductos.filter(producto => producto.nombre.toLocaleLowerCase().includes(valorInput.toLocaleLowerCase()));
    mostrarProductos(productosFiltrados);
};



// =================    MODO OSCURO    =================
// Al hacer click, se cambia al modo oscuro, y cuando se vuelve a cliclear, se vuelve al modo claro
// Se añade un addEventListener para registrar cuando el usuario haga click para cambiar entre los modos oscuro y claro
const botonModoOscuro = document.getElementById("boton-modo-oscuro");
botonModoOscuro.addEventListener("click", function () {
    //console.log("Carrito actualizado:", carrito)
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        botonModoOscuro.textContent = 'Modo Oscuro';
    } else {
        botonModoOscuro.textContent = 'Modo Claro';
    }
});



// =================    LIMPIAR CARRITO    =================
// Al hacer click en el boton, se vacian todos lo productos añadidos al carrito
// Se añade un addEventListener para registrar cuando el usuario haga click y 
// se llama a la funcion que vacia el carrito y elimina el item "carrito", y posteriormente lo guarda vacio
const botonVaciarCarrito = document.getElementById("boton-limpiar-carrito");
botonVaciarCarrito.addEventListener("click", function () {
    console.log("elimino carrito");
    vaciarCarrito();
});

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
    guardarCarrito();
}

// =================    INICIAR    =================
//  *****   ****    *****       ***
function init() {
    mostrarProductos();
}

window.addEventListener("DOMContentLoaded", init);