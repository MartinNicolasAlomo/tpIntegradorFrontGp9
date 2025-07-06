// =================    OBTENER/CREAR EL CARRITO E INICIALIZARLO   =================
// Crea el array carrito[] y obtiene los datos del localStorage, o si no existe, lo inicializa
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



// =================    LISTA PRODUCTOS    =================
// Crea un array con las 13 productos, con su id, nombre, su precio y la ruta a sus fotos en la carpeta img
const listaProductos = [
    {
        id: 1, nombre: "El Club de la Pelea", precio: 5000, img:
            "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 2, nombre: "Shrek", precio: 1000, img:
            "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 3, nombre: "Jurassic Park", precio: 4000, img:
            "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_FMjpg_UX1000_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 4, nombre: "Kill Bill", precio: 3000, img:
            "https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 5, nombre: "¿Y donde estan las rubias?", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_FMjpg_UX1000_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 6, nombre: "El Rey León", precio: 800, img:
            "https://m.media-amazon.com/images/M/MV5BNjExYTQwY2EtMDRkYi00ZWIzLTkwZDUtYjVmODYxMDUwNDI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 7, nombre: "Blade Runner 2049", precio: 1500, img:
            "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 8, nombre: "Harry Potter y la Ordén del Feníx", precio: 9000, img:
            "https://m.media-amazon.com/images/M/MV5BZTY0OGYxODAtOWFmYS00ZGYwLWFiYzktNjgwY2FkNDUwOWUzXkEyXkFqcGc@._V1_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 9, nombre: "Lo Imposible", precio: 2500, img:
            "https://m.media-amazon.com/images/M/MV5BMmY3N2VhZDUtMzViYS00NmM0LThmNjctNjIwYWI3MzUxZjJjXkEyXkFqcGc@._V1_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 10, nombre: "El Caballero Oscuro", precio: 3000, img:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 11, nombre: "El Lobo de Wall Street", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 12, nombre: "Eterno Resplandor de una Mente sin Recuerdos", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
        categoria: "Película", activo: true
    },

    {
        id: 13, nombre: "Vikingos", precio: 5000, img:
            "https://m.media-amazon.com/images/M/MV5BOTFmZmExYTEtYmE0Mi00MzRmLWE4ZDYtOThiNzNlOTIyODljXkEyXkFqcGc@._V1_.jpg",
        categoria: "Serie", activo: true
    },


    {
        id: 14, nombre: "Breaking Bad", precio: 1000, img:
            "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 15, nombre: "Black Sails", precio: 4000, img:
            "https://m.media-amazon.com/images/M/MV5BZGZmOGNjNzUtNTNkMC00ZDU2LThjMDAtZGM2OGRjMjE1OGQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 16, nombre: "Game Of Thrones", precio: 3000, img:
            "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 17, nombre: "El Eternauta", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BYTdjY2U5NjctOTNiNC00ZGM5LWJhNTgtOTkzNWUzMWM4NmM0XkEyXkFqcGc@._V1_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 18, nombre: "The Office", precio: 800, img:
            "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 19, nombre: "Modern Family", precio: 1500, img:
            "https://m.media-amazon.com/images/M/MV5BMTU2NTU3OTE5NF5BMl5BanBnXkFtZTgwMDAzMjE1NjM@._V1_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 20, nombre: "How I Met Your Mother", precio: 9000, img:
            "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 21, nombre: "Black Mirror", precio: 2500, img:
            "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 22, nombre: "Peaky Blinders", precio: 3000, img:
            "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 23, nombre: "The Wire", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BZWYyNmRhYjktNjBhNC00M2NhLWEzYmMtZDYwNmIyZTRiZWMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },

    {
        id: 24, nombre: "ER: Emergencias", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BMzM5NjQ4M2QtNWQyMy00OWUxLWIyZjktNmY2ZjMyZjA2NWE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Serie", activo: true
    },
]


/*




                   ELIMINAR HARDCODEO  -   CONECETAR CON EL TP_BACKEND




*/


// =================    MOSTRAR PRODUCTOS    =================
// mostrarProductos() crea dinamicamente todas las tarjetas de cada producto con sus datos y de forma uniforme, 
// sin necesidad de cargarlas a mano en el .html, y las coloca dentro de su contenedor
let contenedorPeliculas = document.querySelector(".contenedor-peliculas");
let contenedorSeries = document.querySelector(".contenedor-series");

function mostrarProductos(listaProductos) {
    let htmlPeliculas = "";
    let htmlSeries = "";

    listaProductos.forEach(producto => {
        let carta = `
            <div class="carta-producto">
                <div class="contenedor-imagen-producto">
                    <img class="imagen-producto" src="${producto.img}" alt="${producto.nombre}">
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
}



// =================    AGREGAR, ELIMINAR Y GUARDAR CARRITO    =================
// agregarAlCarrito() busca si el producto ya se encuentra en el carrito. 
// Si ya se encuentra en el carrito, solo le aumenta la cantidad +1, pero si es nuevo, lo agrega completo
// eliminarDelCarrito() tambien busca si el producto ya se encuentra en el carrito. 
// Si ya se encuentra en el carrito, le reduce la cantidad +1, y si la cantidad alcanza 0, lo elimina completo del carrito
// y si no existe pone un alert para notificarlo
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
    mostrarProductos(listaProductos);
}

window.addEventListener("DOMContentLoaded", init);