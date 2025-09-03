const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/soma", (req, res) => {
    const { numero1, numero2 } = req.body;
    const resultado = numero1 + numero2;
    res.json({ resultado });
});

app.listen(3030, () => {
    console.log("Servidor rodando em http://localhost:3030");
});