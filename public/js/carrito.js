// ====== GESTIÓN DEL CARRITO ======

// Obtener carrito del localStorage
function obtenerCarrito() {
    const carrito = localStorage.getItem('carritoOthan');
    return carrito ? JSON.parse(carrito) : [];
}

// Guardar carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carritoOthan', JSON.stringify(carrito));
    actualizarContador();
}

// Actualizar contador del carrito en el header
function actualizarContador() {
    const carrito = obtenerCarrito();
    const contador = document.getElementById('contador-carrito');
    if (contador) {
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contador.textContent = totalItems;
    }
}

// Renderizar productos en la página del carrito
function renderizarCarrito() {
    const carrito = obtenerCarrito();
    const productosLista = document.getElementById('productos-lista');
    const carritoVacio = document.getElementById('carrito-vacio');
    const btnComprar = document.getElementById('btn-comprar');

    if (carrito.length === 0) {
        productosLista.style.display = 'none';
        carritoVacio.classList.add('activo');
        btnComprar.disabled = true;
        actualizarTotales(0);
        return;
    }

    productosLista.style.display = 'block';
    carritoVacio.classList.remove('activo');
    btnComprar.disabled = false;

    productosLista.innerHTML = carrito.map((item, index) => `
        <div class="producto-item" data-index="${index}">
            <img src="${item.imagen || 'imga/placeholder.jpg'}" alt="${item.nombre}" class="producto-imagen">
            
            <div class="producto-info">
                <h3>${item.nombre}</h3>
                <p>Talla: ${item.talla || 'M'}</p>
                <p class="producto-precio">$${(item.precio * item.cantidad).toLocaleString()}</p>
            </div>

            <div class="producto-acciones">
                <div class="cantidad-control">
                    <button onclick="cambiarCantidad(${index}, -1)">−</button>
                    <span>${item.cantidad}</span>
                    <button onclick="cambiarCantidad(${index}, 1)">+</button>
                </div>
                <button class="btn-eliminar" onclick="eliminarProducto(${index})">
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    actualizarTotales(total);
}

// Cambiar cantidad de un producto
function cambiarCantidad(index, cambio) {
    const carrito = obtenerCarrito();
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        eliminarProducto(index);
        return;
    }

    guardarCarrito(carrito);
    renderizarCarrito();
}

// Eliminar producto del carrito
function eliminarProducto(index) {
    const carrito = obtenerCarrito();
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    renderizarCarrito();
}

// Actualizar totales
function actualizarTotales(subtotal) {
    const envio = subtotal > 50000 ? 0 : (subtotal > 0 ? 2000 : 0);
    const total = subtotal + envio;

    document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString()}`;
    document.getElementById('envio').textContent = envio === 0 ? 'Gratis' : `$${envio.toLocaleString()}`;
    document.getElementById('total-final').textContent = `$${total.toLocaleString()}`;
}

// Proceder al pago
const btnComprar = document.getElementById('btn-comprar');

if (btnComprar) {
    btnComprar.addEventListener('click', function() {
        const carrito = obtenerCarrito();
        if (carrito.length === 0) return;

        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        const envio = total > 50000 ? 0 : 2000;
        const totalFinal = total + envio;

        alert(`¡Gracias por tu compra!\n\nTotal a pagar: $${totalFinal.toLocaleString()}\n\nSerás redirigido a la página de pago...`);
    });
}


// Inicializar cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    actualizarContador();
    if (document.getElementById('productos-lista')) {
        renderizarCarrito();
    }
});

// ====== FUNCIÓN PARA AGREGAR AL CARRITO (Desde producto.html) ======
function agregarCarrito(nombre, precio, imagen = '') {
    const carrito = obtenerCarrito();

    // Buscar si el producto ya existe
    const index = carrito.findIndex(item => item.nombre === nombre);

    if (index !== -1) {
        // Si existe, aumentar cantidad
        carrito[index].cantidad++;
    } else {
        // Si no existe, agregar nuevo
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1,
            imagen: imagen,
            talla: 'M'
        });
    }

    guardarCarrito(carrito);

    // Mostrar mensaje de confirmación
    mostrarMensaje(`✓ ${nombre} agregado al carrito`);
}

// Mostrar mensaje temporal
function mostrarMensaje(texto) {
    // Remover mensaje anterior si existe
    const mensajeAnterior = document.querySelector('.mensaje-carrito');
    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }

    const mensaje = document.createElement('div');
    mensaje.className = 'mensaje-carrito';
    mensaje.textContent = texto;
    mensaje.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(90deg, goldenrod, #ffcc33);
        color: #000;
        padding: 15px 25px;
        border-radius: 30px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 0 20px rgba(218, 165, 32, 0.6);
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => mensaje.remove(), 300);
    }, 2500);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);