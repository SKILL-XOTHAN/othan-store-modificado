const barraProgreso = document.getElementById("barraProgreso");
const botonProgreso = document.getElementById("botonProgreso");
const b1 = document.querySelector("#b1 .btn");
const b2 = document.querySelector("#b2 .btn");
const b3 = document.querySelector("#b3 .btn");
const b4 = document.querySelector("#b4 .btn");

let progreso = 0;

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
  botonProgreso.disabled = true; // desactiva durante la animación

  // Avanza o reinicia el progreso
  if (progreso >= 100) {
    progreso = 0;
  } else {
    progreso = Math.min(progreso + 100 / 6, 100);
  }

  // Actualiza la barra
  barraProgreso.style.width = `${progreso}%`;
  updateButtonClasses();

  // Cambia el texto del botón según el estado
  botonProgreso.textContent = progreso >= 100 ? "Reiniciar" : "Avanzar";
}

// Reactiva el botón cuando termina la animación de Bootstrap
barraProgreso.addEventListener("transitionend", () => {
  botonProgreso.disabled = false;
});

botonProgreso.addEventListener("click", updateProgressBar);
