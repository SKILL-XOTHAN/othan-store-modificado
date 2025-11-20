//esto da el mensaje de agregado al carrito de compras
function agregarCarrito(nombre, precio) {
    alert(nombre + " agregada al carrito por $" + precio.toLocaleString());
}

const productos = {
    drip: {
        nombre: "Conjunto Drip",
        precio: 35000,
        img: "../imga/drip.webp",
        descripcion: `Conjunto drip confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },

    basicbla: {
        nombre: "Polera blanca básica",
        precio: 15000,
        img: "../imga/basicbla.jpg",
        descripcion: `Polera Tommy blanca confeccionada en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
    mkblanca: {
        nombre: "Polera Michael Kors blanca",
        precio: 15000,
        img: "../imga/mk blanca.jpg",
        descripcion: `Polera Michael Kors confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
    bossnegra: {
        nombre: "Polera Boss negra",
        precio: 15000,
        img: "../imga/boss.jpg",
        descripcion: `Polera Boss negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
    mkne: {
        nombre: "Polera Michael Kors negra",
        precio: 15000,
        img: "../imga/mk ne.jpg",
        descripcion: `Polera Michael Kors negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
    mosne: {
        nombre: "Polera Moschino negra",
        precio: 15000,
        img: "../imga/mos ne.jpg",
        descripcion: `Polera Moschino negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
    tommyne: {
        nombre: "Polera Tommy negra",
        precio: 15000,
        img: "../imga/tommy ne.jpg",
        descripcion: `Polera Tommy negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
    tommybl: {
        nombre: "Polera Tommy blanca",
        precio: 15000,
        img: "../imga/tomy blanca.jpg",
        descripcion: `Polera Tommy blanca confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
    aen: {
        nombre: "Polera Emporio Armani negra",
        precio: 15000,
        img: "../imga/aen.jpg",
        descripcion: `Polera Emporio Armani negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S", "M", "L"],
    },
};

// Obtener producto seleccionado
const id = localStorage.getItem("productoId");
const producto = productos[id];
const detalle = document.getElementById("detalle");

if (producto) {
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
        producto.precio
    })">Agregar al carrito</button>

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
