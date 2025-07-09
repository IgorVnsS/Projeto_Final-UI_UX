const express = require("express");
const path = require("path");
const app = express();
const porta = 3000;

// Servir arquivos estáticos da pasta /public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/login.html");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
