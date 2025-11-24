document.addEventListener("DOMContentLoaded", () => {
  const formularios = document.querySelectorAll(".needs-validation");

  formularios.forEach((formaPedido) => {
    const input = formaPedido.querySelector("#numPedido");

    formaPedido.addEventListener("submit", (event) => {
      event.preventDefault();
      formaPedido.classList.add("was-validated");

      if (!formaPedido.checkValidity()) return;

      const numPedido = input.value.trim();

      // Redirige a otra página con el número del pedido como parámetro
      window.location.href = `rastreo.html?pedido=${encodeURIComponent(
        numPedido
      )}`;
    });
  });
});
