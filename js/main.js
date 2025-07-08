// =================    CARGAR CONFIGURACION BOTON CONTINUAR    =================
// -Validamos que el campo nombre no este vacio
// -Guardamos el nombre en el localstorage
// -Redireccionamos a producto.html si hay un nombre
function configurarBotonContinuar(){
  const botonContinuar=document.getElementById("boton-continuar");
  const inputNombre = document.getElementById("nombre");
  botonContinuar.addEventListener("click", () => {
    const nombreCliente = inputNombre.value.trim();

    if (nombreCliente !== "") {
      localStorage.setItem("nombreCliente", nombreCliente);
      window.location.href = "productos.html";
    } else {
      alert("Por favor, ingresa tu nombre antes de continuar.");
    }
  });
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
  configurarBotonContinuar();
  localStorage.setItem("nombreCliente","");
  //Si el carrito existe, lo elimino siempre que vuelvo al index
  if (localStorage.getItem("carrito") !== null) {
    localStorage.removeItem("carrito");
  }
}

init();