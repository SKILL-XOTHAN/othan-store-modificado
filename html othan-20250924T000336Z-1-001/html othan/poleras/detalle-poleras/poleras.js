
//esto da el mensaje de agregado al carrito de compras 
function agregarCarrito(nombre, precio) {
    alert(nombre + " agregada al carrito por $" + precio.toLocaleString());
}




const productos = {

    drip: {
        nombre: "Conjunto Drip",
        precio: 35000,
        img: "../../imga/drip.webp",
        descripcion: `Conjunto drip confeccionado en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas: ["S","M","L"]
    },
    
    basicbla: {
        nombre:"Polera blanca básica",
        precio: 15000,
        img: "../../imga/basicbla.jpg",
        descripcion: `Polera Tommy blanca confeccionada en algodón premium con corte regular fit.
                      Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                      Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
    },
    mkblanca: {
        nombre:"Polera Michael Kors blanca",
        precio: 15000,
        img: "../../imga/mk blanca.jpg",
        descripcion:`Polera michael kors confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
    },
    bossnegra: {
        nombre:"Polera Boss negra",
        precio: 15000,
        img: "../../imga/boss.jpg",
        descripcion:`Polera Boss negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
    },
    mkne: {
        nombre:"Polera Michael Kors negra",
        precio: 15000,
        img: "../../imga/mk ne.jpg",
        descripcion:`Polera Michael Kors negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
    },
    mosne: {
        nombre:"Polera Moschino negra",
        precio: 15000,
        img: "../../imga/mos ne.jpg",
        descripcion:`Polera Moschino negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
    },
    tommyne: {
        nombre:"Polera Tommy negra",
        precio: 15000,
        img: "../../imga/tommy ne.jpg",
        descripcion:`Polera Tommy negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
    },
    tommybl: {
        nombre:"Polera Tommy blanca",
        precio: 15000,
        img: "../../imga/tomy blanca.jpg",
        descripcion:`Polera Tommy blanca confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
    },
    aen: {
        nombre:"Polera Emporio Armani negra",
        precio: 15000,
        img: "../../imga/aen.jpg",
        descripcion:`Polera Emporio Armani negra confeccionada en algodón premium con corte regular fit.
                     Diseño elegante con logo minimalista, ideal para combinar con jeans o pantalones casuales.
                     Perfecta para quienes buscan comodidad y estilo con un toque de lujo.`,
        tallas:["S","M","L"]
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
