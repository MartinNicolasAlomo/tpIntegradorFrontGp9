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
        id: 13, nombre: "Supoer Smash Bros. Brawl", precio: 5000, img:
            "https://m.media-amazon.com/images/M/MV5BY2JlZGIxNjYtYjA5OS00ZDI0LTg0MDktZDNmMzhhNGQxZTc3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 14, nombre: "Super Mario Bors.", precio: 1000, img:
            "https://m.media-amazon.com/images/M/MV5BNTVlZDI0YjUtYzJhMi00NjkyLWE1YjktZDUzNzBmMGYwNDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 15, nombre: "Sims 2", precio: 4000, img:
            "https://m.media-amazon.com/images/M/MV5BMGY3MzRhZTgtMjJmMC00ZTM2LWJlNGMtNTE3NjFiMTRmYTM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 16, nombre: "GTA San Andreas", precio: 3000, img:
            "https://m.media-amazon.com/images/M/MV5BOTYzMzg5MGUtNzhlZS00YWMzLTkwY2EtY2I2MjVmZDUzYjYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 17, nombre: "GTA Vice City", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BYTcwMWYzMjgtYjQwYy00ODA2LTlkMTgtMzE0Y2RlYzJlMGI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 18, nombre: "Counter-Strike", precio: 800, img:
            "https://m.media-amazon.com/images/M/MV5BOWU1MTVhOTUtNmU0Mi00MWNiLWIyOWQtMDFkOTFmMzc5ZTNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 19, nombre: "NFS Most Wanted", precio: 1500, img:
            "https://m.media-amazon.com/images/M/MV5BYzZlMjBjYjItMzUzOC00YTJlLThiNWQtNjViZjc1MTA2ZGE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 20, nombre: "Residnet Evil 4", precio: 9000, img:
            "https://m.media-amazon.com/images/M/MV5BZWY3ZjRiNTctYzU2My00NDIwLWI3NTAtNmUwZDBlZjlhYjI4XkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 21, nombre: "Shadow of the Colossus", precio: 2500, img:
            "https://m.media-amazon.com/images/M/MV5BMTgxNzgwNmYtNWQ5My00ZjI4LWJmZTEtZDFmMThjNWNlZjg5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 22, nombre: "God of War 3", precio: 3000, img:
            "https://m.media-amazon.com/images/M/MV5BM2QxNjZlYTEtOWVkNC00OGUxLTgwNjMtN2Y4Y2ZjMzcwZjIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 23, nombre: "Black", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BZDg4MjY2NzEtMjJmYS00NzU3LTk1N2YtYzY3YTUzZDJkM2FkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        categoria: "Videojuego", activo: true
    },

    {
        id: 24, nombre: "Mortal Kombat 1", precio: 2000, img:
            "https://m.media-amazon.com/images/M/MV5BYjhmYTI1OTYtMjVlMy00YjA4LTk1MTAtMTRhZjI4NzM3YTdkXkEyXkFqcGc@._V1_.jpg",
        categoria: "Videojuego", activo: true
    },
]



// =================    MOSTRAR PRODUCTOS    =================
// mostrarProductos() crea dinamicamente todas las tarjetas de cada producto con sus datos y de forma uniforme, 
// sin necesidad de cargarlas a mano en el .html, y las coloca dentro de su contenedor
let contendorProductos = document.querySelector(".contenedor-productos");

function mostrarProductos(listaProductos) {
    let htmlProductos = "";

    listaProductos.forEach(producto => {
        htmlProductos += `
            <div class="carta-producto">
                <div class="contenedor-imagen-producto">
                    <img class="imagen-producto" src="${producto.img}" alt="${producto.nombre}">
                </div>
                <div class="contenedor-nombre-producto">
                    <h3 class="nombre-producto">${producto.nombre}</h3>
                </div>
                <div class="contenedor-precio-producto">
                    <p class="precio-producto">$${producto.precio}</p>
                </div>
                <div class="contenedor-boton-producto">
                    <button class="boton-agregar" data-id="${producto.id}">Agregar al carrito</button>
                </div>
            </div>
        `;
    });
    contendorProductos.innerHTML = htmlProductos;

    document.querySelectorAll(".boton-agregar").forEach(boton => {
        boton.addEventListener("click", function () {
            const id = parseInt(this.dataset.id);
            agregarAlCarrito(id)
        });
    });
}



// =================    AGREGAR Y GUARDAR CARRITO    =================
// agregarAlCarrito() busca si el producto ya se encuentra en el carrito. 
// Si ya se encuentra en el carrito, le aumenta la cantidad +1, pero si es nuevo, lo agrega completo
// guardarCarrito() transforma el array en formato JSON y lo guarda en el localStorage
function agregarAlCarrito(id) {
    let producto = listaProductos.find(producto => producto.id === id);
    let productoExistente = carrito.find(producto => producto.id === id);
    /*    console.log(producto.nombre);
        console.log(carrito);
        console.log('------------------------');*/

    if (productoExistente) {
        productoExistente.cantidad += 1;
        /*        console.log("ya exciste +1");
                console.log(productoExistente.nombre);
                console.log(productoExistente.cantidad);*/
    }
    else {
        carrito.push({ ...producto, cantidad: 1 });
        /*        console.log("nuevo productos");
                console.log(producto.nombre);
                console.log(producto.cantidad);
                 console.log(producto.cantidad);*/
    }
    guardarCarrito(carrito);
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
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

// =================    LIMPIAR CARRITO    =================
//  *****   ****    *****       ***
function init() {
    mostrarProductos(listaProductos);
}

window.addEventListener("DOMContentLoaded", init);