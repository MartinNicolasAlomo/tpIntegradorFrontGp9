//INICIALIZO EL CARRITO
let carrito= JSON.parse(localStorage.getItem("carrito")) || []; 

// =================    MOSTRAR CARRITO    ======================
// -mostrarCarrito() crea dinamicamente todas las tarjetas de cada producto dentro del carrito 
// -Agrega las funcionalizades de boton
// -Actualizo el carrito dependiendo de la accion que se ejecute(restar/sumar/eliminar)
const contenedorCarrito = document.getElementById("lista-producto");
function mostrarCarrito(){
    let totalCarrito=0;
    let cantidadCarrito=0;
    contenedorCarrito.innerHTML="";
    for(let i=0;i<carrito.length;i++){
        const producto = carrito[i];
        let subTotal=producto.cantidad * producto.precio;
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML=` 
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="info-producto">
                <p><strong>${producto.nombre}</strong></p>
                <p>Precio unitario: $${producto.precio}</p>
                <p>Cantidad: <span id="cant">${producto.cantidad}</span></p>
                <p>Subtotal: $<span id="sub">${subTotal}</span></p>
            </div>
            <div class="controles-accion">
                <button class="boton-restar"onclick="restarProducto('${producto.id}')">−</button>
                <button class="boton-agregar-carrito" onclick="sumarProducto('${producto.id}')">+</button>
                <button class="boton-eliminar">Eliminar</button>
            </div>
        `;
        contenedorCarrito.appendChild(div);
        //Agrego el evento al boton eliminar
        div.querySelector('.boton-eliminar').addEventListener('click',()=>EliminarProducto(producto.id));
        totalCarrito=totalCarrito+subTotal;
        cantidadCarrito=cantidadCarrito+producto.cantidad;
        //Voy calculando el total de los productos
    }
    const buttonFinalizar = document.getElementById("boton-finalizar");
    buttonFinalizar.addEventListener("click",vaciarCarrito);
    actualizarTotales(totalCarrito,cantidadCarrito);
}

// =================    VACIAR CARRITO    ======================
// -Vacia todo los elementos del carrito 
// -guarda el carrito vacio en el localStorage
function vaciarCarrito(){
    if(carrito.length>0){
        for(let i = 0;carrito.length;i++){
            carrito.length=0;
        }
        actualizarCarrito(carrito);
        window.location="index.html";
    }
    else{
        alert("No hay productos en el carrito");
    }
    
}

// =================    Actualizar Totales    ======================
// -Actualizo la informacion de total y cantidad del carrito
function actualizarTotales(importeTotal,cantidadTotal){
    const total= document.getElementById("total-carrito");
    const cantidad = document.getElementById("cantidad-carrito");
    total.textContent="Total = $"+importeTotal;
    cantidad.textContent="Cantidad = "+cantidadTotal;
}

// =================    Eliminar Producto    ======================
// -Elimino el producto que recibo por parametro del carrito y 
//  lo actualizo en el Storage
function EliminarProducto(codigoProducto){
    let actualizoCarrito=false;
        for(let i = 0;carrito.length;i++){
            const producto=carrito[i]
            if(producto.id==codigoProducto){
                carrito.splice(i,1);
                actualizoCarrito=true;
                break;
            }
        }
    
    //Solo si encuentro el producto actualizo el carrito
    if(actualizoCarrito){
        actualizarCarrito(carrito);
        mostrarCarrito();
    }
}

// =================    Restar Producto    ======================
// -Resto la cantidad del producto que recibo por parametro en el  carrito y 
//  lo actualizo en el Storage
function restarProducto(codigoProducto){
    let actualizoCarrito=false;
    for(let i = 0;carrito.length;i++){
        const producto=carrito[i]
        if(producto.id==codigoProducto){
            producto.cantidad=producto.cantidad - 1
            actualizoCarrito=true;
            break;
        }
    }
    //Solo si encuentro el producto actualizo el carrito
    if(actualizoCarrito){
        actualizarCarrito(carrito);
        mostrarCarrito();
    }
}

// =================    Restar Producto    ======================
// -Sumo la cantidad del producto que recibo por parametro en el  carrito y 
//  lo actualizo en el localStorage
function sumarProducto(codigoProducto){
    let actualizoCarrito=false;
    for(let i = 0;carrito.length;i++){
        const producto=carrito[i]
        if(producto.id==codigoProducto){
            producto.cantidad=producto.cantidad + 1
            actualizoCarrito=true;
            break;
        }
    }
    //Solo si encuentro el producto actualizo el carrito
    if(actualizoCarrito){
        actualizarCarrito(carrito);
        mostrarCarrito();
    }

}
// =================    actualizar Carrito    ======================
// -Actualizo el el carrito en el localStorage
function actualizarCarrito(nuevoCarrito){
     localStorage.setItem("carrito",JSON.stringify(nuevoCarrito));
}


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


function init(){
    mostrarCarrito();
}


init();