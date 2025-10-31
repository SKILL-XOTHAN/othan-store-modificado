
//esto da el mensaje de agregado al carrito de compras 
function agregarCarrito(nombre, precio) {
    alert(nombre + " agregada al carrito por $" + precio.toLocaleString());
}




const productos = {

    conjunto1: {
        nombre: "Conjunto drip",
        precio: 15000,
        img: "../../imga/drip.webp",
        descripcion: `Conjunto drip confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
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

