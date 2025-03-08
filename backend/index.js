// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend läuft!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
