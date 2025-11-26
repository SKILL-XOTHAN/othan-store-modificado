const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const dataDir = path.join(__dirname, "data");
const filePath = path.join(dataDir, "pedidos.json");

// Crear carpeta y archivo si no existen
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "{}");

// Guardar pedido (POST)
app.post("/guardarPedido", (req, res) => {
    const { pedidoID, rastreoID, estado } = req.body;

    if (!pedidoID || !rastreoID || estado === undefined) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return res.status(500).json({ error: "Error al leer pedidos" });

        let pedidos = {};
        try {
            pedidos = JSON.parse(data || "{}");
        } catch {
            pedidos = {};
        }

        pedidos[pedidoID] = { pedidoID, rastreoID, estado };

        fs.writeFile(filePath, JSON.stringify(pedidos, null, 2), "utf8", (err2) => {
            if (err2) {
                console.error("Error al guardar:", err2);
                return res.status(500).json({ error: "Error al guardar el pedido" });
            }
            res.json({
                mensaje: "Pedido guardado correctamente",
                datos: pedidos[pedidoID],
            });
        });
    });
});

// Cargar pedido (GET)
app.get("/cargarPedido/:pedidoID", (req, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return res.status(500).json({ error: "Error al leer pedidos" });

        try {
            const pedidos = JSON.parse(data || "{}");
            const pedido = pedidos[req.params.pedidoID];

            if (!pedido) {
                return res.status(404).json({ error: "Pedido no encontrado" });
            }

            res.json(pedido);
        } catch (parseErr) {
            console.error("Error parseando JSON:", parseErr);
            res.status(500).json({ error: "JSON inválido en servidor" });
        }
    });
});

app.listen(PORT, () =>
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
);