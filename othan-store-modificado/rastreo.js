// === Variables base ===
const barraProgreso = document.getElementById("barraProgreso");
const botonProgreso = document.getElementById("botonProgreso");
const orderID = document.getElementById("orderID");
const trackingID = document.getElementById("trackingID");
const b1 = document.querySelector("#b1 .btn");
const b2 = document.querySelector("#b2 .btn");
const b3 = document.querySelector("#b3 .btn");
const b4 = document.querySelector("#b4 .btn");

const BASE_URL = "http://localhost:3000";

// === Leer el número de pedido desde la URL ===
let pedidoID = new URLSearchParams(window.location.search).get("pedido");
let rastreoID = null;
let progreso = 0;

// Si no hay pedido, redirigir a la página principal
if (!pedidoID) {
  alert("No se especificó un número de pedido.");
  window.location.href = "pedidos.html";
}

// === Función: Cargar pedido existente desde el servidor ===
async function cargarPedido() {
  try {
    const respuesta = await fetch(`${BASE_URL}/cargarPedido/${pedidoID}`);
    if (!respuesta.ok) throw new Error("No se encontró el pedido");

    const pedido = await respuesta.json();
    rastreoID = pedido.rastreoID;
    progreso = pedido.estado || 0;

    // Mostrar en pantalla
    orderID.textContent = pedidoID;
    trackingID.textContent = rastreoID;
    barraProgreso.style.width = `${progreso}%`;
    updateButtonClasses();
    botonProgreso.textContent = progreso >= 100 ? "Reiniciar" : "Avanzar";
  } catch (error) {
    console.warn("Error al cargar el pedido:", error);
    alert(
      "No se pudo cargar el pedido. Verifica el número e intenta nuevamente."
    );
    window.location.href = "pedidos.html";
  }
}

// === Función: Guardar el progreso actualizado ===
async function guardarPedido() {
  try {
    const data = { pedidoID, rastreoID, estado: progreso };

    const respuesta = await fetch(`${BASE_URL}/guardarPedido`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) throw new Error("Error al guardar en el servidor");

    const resultado = await respuesta.json();
    console.log("Pedido actualizado:", resultado.datos);
  } catch (error) {
    console.error("Error al guardar:", error);
  }
}

// === Función: Actualizar los botones de progreso ===
function updateButtonClasses() {
  const botones = [b1, b2, b3, b4];
  const thresholds = [0, 33.33, 66.66, 100];

  botones.forEach((btn, i) => {
    btn.classList.remove("bg-black", "bg-warning");
    btn.classList.add(progreso >= thresholds[i] ? "bg-black" : "bg-warning");
  });
}

// === Función: Avanzar o reiniciar progreso ===
function updateProgressBar() {
  botonProgreso.disabled = true;

  progreso = progreso >= 100 ? 0 : Math.min(progreso + 100 / 6, 100);

  barraProgreso.style.width = `${progreso}%`;
  updateButtonClasses();
  botonProgreso.textContent = progreso >= 100 ? "Reiniciar" : "Avanzar";

  guardarPedido();
}

// === Eventos ===
barraProgreso.addEventListener("transitionend", () => {
  botonProgreso.disabled = false;
});

botonProgreso.addEventListener("click", updateProgressBar);

// === Inicialización ===
document.addEventListener("DOMContentLoaded", cargarPedido);
