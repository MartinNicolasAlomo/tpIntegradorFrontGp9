const contenedorCarrito = document.getElementById("lista-producto");
function mostrarCarrito(){
    let carrito= JSON.parse(localStorage.getItem("carrito")) || []; 
    let totalCarrito=0;
    let cantidadCarrito=0;
    contenedorCarrito.innerHTML="";
    for(let i=0;i<carrito.length;i++){
        const producto = carrito[i];
        let subTotal=producto.cantidad * producto.precio;
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML=` 
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info">
                <p><strong>${producto.nombre}</strong></p>
                <p>Precio unitario: $${producto.precio}</p>
                <p>Cantidad: <span id="cant">${producto.cantidad}</span></p>
                <p>Subtotal: $<span id="sub">${subTotal}</span></p>
            </div>
            <div class="controles">
                <button class="btn-restar"onclick="restarProducto('${producto.id}')">−</button>
                <button class="btn-agregar" onclick="sumarProducto('${producto.id}')">+</button>
                <button class="btn-eliminar">Eliminar</button>
            </div>
        `;
        contenedorCarrito.appendChild(div);
        //Agrego el evento al boton eliminar
        div.querySelector('.btn-eliminar').addEventListener('click',()=>EliminarProducto(producto.id));
        totalCarrito=totalCarrito+subTotal;
        cantidadCarrito=cantidadCarrito+producto.cantidad;
        //Voy calculando el total de los productos
    }
    const buttonFinalizar = document.getElementById("btn-finalizar");
    buttonFinalizar.addEventListener("click",vaciarCarrito);
    actualizarTotales(totalCarrito,cantidadCarrito);
    
    
}


function vaciarCarrito(){
    let carrito= JSON.parse(localStorage.getItem("carrito")) || []; 
    for(let i = 0;carrito.length;i++){
        carrito.length=0;
    }
    localStorage.setItem("carrito",JSON.stringify(carrito));
    window.location="index.html";
    
}
function actualizarTotales(importeTotal,cantidadTotal){
    const total= document.getElementById("total-carrito");
    const cantidad = document.getElementById("cantidad-carrito");
    total.textContent="Total = $"+importeTotal;
    cantidad.textContent="Cantidad = "+cantidadTotal;
}
function EliminarProducto(codigoProducto){
    let carrito= JSON.parse(localStorage.getItem("carrito")) || []; 
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
        localStorage.setItem("carrito",JSON.stringify(carrito));
        mostrarCarrito();
    }
}

function restarProducto(codigoProducto){
    //Consulto el carrito actual para buscar el producto
    let carrito= JSON.parse(localStorage.getItem("carrito")) || []; 
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
        localStorage.setItem("carrito",JSON.stringify(carrito));
        mostrarCarrito();
    }
}

function sumarProducto(codigoProducto){
    //Consulto el carrito actual para buscar el producto
    let carrito= JSON.parse(localStorage.getItem("carrito")) || []; 
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
        localStorage.setItem("carrito",JSON.stringify(carrito));
        mostrarCarrito();
    }

}
function init(){
    mostrarCarrito();
}

init();