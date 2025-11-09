const barraProgreso = document.getElementById("barraProgreso");
const botonProgreso = document.getElementById("botonProgreso");
const orderID = document.getElementById("orderID");
const trackingID = document.getElementById("trackingID");
const b1 = document.querySelector("#b1 .btn");
const b2 = document.querySelector("#b2 .btn");
const b3 = document.querySelector("#b3 .btn");
const b4 = document.querySelector("#b4 .btn");

let pedidoID = "3333-CCCC";
let rastreoID;
let progreso = 0;

// --- Cambia esta URL cuando subas tu servidor a internet ---
const BASE_URL = "http://localhost:3000";

// --- Funciones ---
async function cargarPedido() {
  try {
    const respuesta = await fetch(`${BASE_URL}/cargarPedido/${pedidoID}`);
    if (!respuesta.ok) throw new Error("No se encontró el pedido");
    return await respuesta.json();
  } catch (error) {
    console.warn("No se pudo cargar el pedido:", error);
    return null;
  }
}

async function guardarPedido() {
  try {
    const respuesta = await fetch(`${BASE_URL}/guardarPedido`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pedidoID,
        rastreoID,
        estado: progreso,
      }),
    });
    const data = await respuesta.json();
    console.log(data.mensaje);
  } catch (error) {
    console.error("Error al guardar:", error);
  }
}

function updateButtonClasses() {
  const botones = [b1, b2, b3, b4];
  const thresholds = [0, 33.33, 66.66, 100];

  botones.forEach((btn, i) => {
    btn.classList.remove("bg-success", "bg-secondary");
    btn.classList.add(
      progreso >= thresholds[i] ? "bg-success" : "bg-secondary"
    );
  });
}

function updateProgressBar() {
  botonProgreso.disabled = true;

  if (progreso >= 100) {
    progreso = 0;
  } else {
    progreso = Math.min(progreso + 100 / 6, 100);
  }

  barraProgreso.style.width = `${progreso}%`;
  updateButtonClasses();
  botonProgreso.textContent = progreso >= 100 ? "Reiniciar" : "Avanzar";

  guardarPedido(); // guardar en el servidor
}

barraProgreso.addEventListener("transitionend", () => {
  botonProgreso.disabled = false;
});

document.addEventListener("DOMContentLoaded", async () => {
  const pedido = await cargarPedido();
  if (pedido && pedido.rastreoID && pedido.estado !== undefined) {
    pedidoID = pedido.pedidoID;
    progreso = pedido.estado;
    rastreoID = pedido.rastreoID;

    barraProgreso.style.width = `${progreso}%`;
    updateButtonClasses();
    orderID.textContent = pedidoID;
    trackingID.textContent = rastreoID;
    botonProgreso.textContent = progreso >= 100 ? "Reiniciar" : "Avanzar";
  }
});

botonProgreso.addEventListener("click", updateProgressBar);
