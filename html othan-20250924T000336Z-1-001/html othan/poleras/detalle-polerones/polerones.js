
//esto da el mensaje de agregado al carrito de compras 
function agregarCarrito(nombre, precio) {
    alert(nombre + " agregada al carrito por $" + precio.toLocaleString());
}




const productos = {

    poleron1: {
        nombre: "Polera Emporio Armani azul",
        precio: 15000,
        img: "../../imga/polerontiger.jpg",
        descripcion: `Polera Emporio Armani azul confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
    },
    poleron2: {
        nombre: "Polera Emporio Armani azul",
        precio: 15000,
        img: "../../imga/poleronazul.jpg",
        descripcion: `Polera Emporio Armani azul confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
    },
    poleron3: {
        nombre: "Polera Emporio Armani negra",
        precio: 15000,
        img: "../../imga/poleronnegro.jpg",
        descripcion: `Polera Emporio Armani negra confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
    },
    poleron4: {
        nombre: "Polera Emporio Armani celeste",
        precio: 15000,
        img: "../../imga/poleron kappa.jpg",
        descripcion: `Polera Emporio Armani celeste confeccionado en algodón premium con corte regular fit.
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

