const productos = {
    tillas1: {
        nombre: "zapatilla jordan 1 ",
        precio: 65000,
        img: "../../imga/jordan1low.jpg",
        descripcion: `zapatilla jordan 1 elaboradas con materiales de alta calidad, combinando cuero genuino y textil para brindar durabilidad y confort.
                      Su diseño clásico e icónico ofrece un estilo urbano y versátil, ideal para combinar con cualquier outfit.
                      La suela de goma antideslizante y la amortiguación interna garantizan una pisada cómoda durante todo el día.
                      Perfectas para quienes buscan destacar con un look moderno sin sacrificar la comodidad.`,
        tallas: ["40", "41", "42", "43", "44"],
    },
    tillas2: {
        nombre: "ZAPATILLA LV ",
        precio: 65000,
        img: "../../imga/LV.jpg",
        descripcion: `ZAPATILLA LV elaboradas con materiales de alta calidad, combinando cuero genuino y textil para brindar durabilidad y confort.
                      Su diseño clásico e icónico ofrece un estilo urbano y versátil, ideal para combinar con cualquier outfit.
                      La suela de goma antideslizante y la amortiguación interna garantizan una pisada cómoda durante todo el día.
                      Perfectas para quienes buscan destacar con un look moderno sin sacrificar la comodidad.`,
        tallas: ["40", "41", "42", "43", "44"],
    },
    tillas3: {
        nombre: "Jordan R4 red thunder ",
        precio: 65000,
        img: "../../imga/r4thunder.jpg",
        descripcion: `Zapatillas Jordan R4 red thunder elaboradas con materiales de alta calidad, combinando cuero genuino y textil para brindar durabilidad y confort.
                      Su diseño clásico e icónico ofrece un estilo urbano y versátil, ideal para combinar con cualquier outfit.
                      La suela de goma antideslizante y la amortiguación interna garantizan una pisada cómoda durante todo el día.
                      Perfectas para quienes buscan destacar con un look moderno sin sacrificar la comodidad.`,
        tallas: ["40", "41", "42", "43", "44"],
    },
    tillas4: {
        nombre: "Jordan R4 black cat ",
        precio: 65000,
        img: "../../imga/R4black.jpg",
        descripcion: `Zapatillas Jordan R4 black cat elaboradas con materiales de alta calidad, combinando cuero genuino y textil para brindar durabilidad y confort.
                      Su diseño clásico e icónico ofrece un estilo urbano y versátil, ideal para combinar con cualquier outfit.
                      La suela de goma antideslizante y la amortiguación interna garantizan una pisada cómoda durante todo el día.
                      Perfectas para quienes buscan destacar con un look moderno sin sacrificar la comodidad.`,
        tallas: ["40", "41", "42", "43", "44"],
    },
};

// Obtener producto seleccionado
const id = localStorage.getItem("productoId");
const producto = productos[id];
const detalle = document.getElementById("detalle");

if (producto) {
    const imagenCarrito = producto.img.replace(/^(\.\.\/)+/, '');
    detalle.innerHTML = `
        <div class="imagen-producto">
            <img src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div class="info">
            <h2>${producto.nombre}</h2>
            <div class="precio">$${producto.precio.toLocaleString()}</div>

            <div class="tallas">
                <strong>Elige tu talla</strong>
                <div class="tallas-opciones">
                    ${producto.tallas.map((t) => `<span>${t}</span>`).join(" ")}
                </div>
            </div>

                <button onclick="agregarCarrito('${producto.nombre}', ${
        producto.precio},'${imagenCarrito}')">Agregar al carrito</button>

            <!-- SECCIÓN ENVÍO Y OPCIONES -->
            <div class="envio-info">
              <p class="texto-principal">
                ¿Quieres que llegue en menos de 3 horas?<br>
                <span>¡Elige Envío Ultra-rápido y recibe tus productos en menos de 3 horas! (*)</span>
              </p>

              <div class="talla-envio">
                <button class="btn-talla">Conoce tu talla</button>
                <button class="btn-talla">Tabla de tallas</button>
              </div>

              <div class="opciones-envio">
                <label class="metodo">
                  <input type="radio" name="metodo-envio" checked>
                  <span>Envío a domicilio</span>
                  <p>Seleccionar talla para ver disponibilidad</p>
                </label>

                <label class="metodo">
                  <input type="radio" name="metodo-envio">
                  <span>Retiro en tienda</span>
                  <p>Seleccionar talla para ver disponibilidad en tiendas</p>
                </label>
              </div>
            </div>
        </div>

        <section class="xyz-info">
            <h3>Descripción</h3>
            <p>${producto.descripcion}</p>

            <h3>Características</h3>
            <ul>
                <li>Corte regular fit</li>
                <li>Logo bordado minimalista</li>
            </ul>

            <h3>Cómo Funciona</h3>
            <p>Usa esta prenda como guía de estilo. Si estás entre tallas o prefieres un ajuste más suelto, elige una talla más grande.</p>

            <h3>Preguntas Frecuentes</h3>
            <p>Los productos sin uso, con etiquetas y en su empaque original pueden devolverse o cambiarse dentro de los 30 días posteriores a la compra.</p>

            <h3>Detalles del Producto</h3>
            <p>"Producto confeccionado con materiales de alta calidad, diseñado para brindar comodidad y estilo."</p>

            <h3>Reseñas</h3>
            <p>"no hay reseñas por el momento"</p>

        </section>
    `;

    // Selección de talla activa
    const spans = detalle.querySelectorAll(".tallas span");
    spans.forEach((span) => {
        span.addEventListener("click", () => {
            spans.forEach((s) => s.classList.remove("active"));
            span.classList.add("active");
        });
    });

    // Efecto visual al cambiar método de envío
    const metodos = detalle.querySelectorAll(".opciones-envio label");
    metodos.forEach((m) => {
        const input = m.querySelector("input");
        input.addEventListener("change", () => {
            metodos.forEach((e) => e.classList.remove("activo"));
            if (input.checked) m.classList.add("activo");
        });
    });
} else {
    detalle.innerHTML = "<p>Producto no encontrado.</p>";
}