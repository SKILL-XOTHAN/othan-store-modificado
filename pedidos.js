document.addEventListener("DOMContentLoaded", () => {
  const formularios = document.querySelectorAll(".needs-validation");

  formularios.forEach((formaPedido) => {
    formaPedido.addEventListener("submit", (event) => {
      event.preventDefault();

      // Marca el formulario como validado (Bootstrap aplicará estilos)
      formaPedido.classList.add("was-validated");

      if (!formaPedido.checkValidity()) {
        // Si hay errores, no continuar
        return;
      }

      // Si pasa la validación
      alert(`Pedido ingresado con éxito! Número: ${formaPedido.numPedido.value}`);

      // Reinicia el formulario visualmente
      formaPedido.reset();
      formaPedido.classList.remove("was-validated");
    });
  });
});
