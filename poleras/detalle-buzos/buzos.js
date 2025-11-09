
//esto da el mensaje de agregado al carrito de compras 
function agregarCarrito(nombre, precio) {
    alert(nombre + " agregada al carrito por $" + precio.toLocaleString());
}




const productos = {

    buzo1: {
        nombre: "Buzo nike negro",
        precio: 20000,
        img: "../../imga/buzo.jpg",
        descripcion: `Buzo nike negro confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
    },
    buzo2: {
        nombre: "Buzo nike negro",
        precio: 20000,
        img: "../../imga/buzo.jpg",
        descripcion: `Buzo nike negro confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
    },
    buzo3: {
        nombre: "Buzo nike negro",
        precio: 20000,
        img: "../../imga/buzo.jpg",
        descripcion: `Buzo nike negro confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
    },
    buzo4: {
        nombre: "Buzo nike negro",
        precio: 20000,
        img: "../../imga/buzo.jpg",
        descripcion: `Buzo nike negro confeccionado en algodón premium con corte regular fit.
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

