
//esto da el mensaje de agregado al carrito de compras 
function agregarCarrito(nombre, precio) {
    alert(nombre + " agregada al carrito por $" + precio.toLocaleString());
}




const productos = {

    tillas1: {
        nombre: "Jordan 1 low ",
        precio: 65000,
        img: "../../imga/jordan1low.jpg",
        descripcion: `Zapatillas Jordan 1 Low elaboradas con materiales de alta calidad, combinando cuero genuino y textil para brindar durabilidad y confort.
                      Su diseño clásico e icónico ofrece un estilo urbano y versátil, ideal para combinar con cualquier outfit.
                      La suela de goma antideslizante y la amortiguación interna garantizan una pisada cómoda durante todo el día.
                      Perfectas para quienes buscan destacar con un look moderno sin sacrificar la comodidad.`,
        tallas: ["40","41","42","43","44"]
    }
   
};

// Obtener el producto seleccionado 
const id = localStorage.getItem('productoId');
const producto = productos[id];
const detalle = document.getElementById('detalle');

if(producto){
    detalle.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <div class="info">
            <h2>${producto.nombre}</h2>
            <p class="precio">$${producto.precio.toLocaleString()}</p>
            <p class="descripcion">${producto.descripcion}</p>
            <div class="tallas">
                <strong>Tallas disponibles:</strong><br><br>
                ${producto.tallas.map(t => `<span>${t}</span>`).join(' ')}
            </div>
            <button onclick="agregarCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
        </div>
    `;
} else {
    detalle.innerHTML = "<p>Producto no encontrado.</p>";
}

