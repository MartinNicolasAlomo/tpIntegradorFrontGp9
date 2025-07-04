// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const btnContinuar = document.getElementById("btn-continuar");
  const inputNombre = document.getElementById("nombre");

  btnContinuar.addEventListener("click", () => {
    const nombreCliente = inputNombre.value.trim();

    if (nombreCliente !== "") {
      localStorage.setItem("nombreCliente", nombreCliente);
      window.location.href = "producto.html";
    } else {
      alert("Por favor, ingresa tu nombre antes de continuar.");
    }
  });
});

