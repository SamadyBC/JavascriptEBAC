/*const http = require("http");

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}/`); // Backtick for derefering
});
*/

const express = require("express");
const server = express();

server.listen(3001);

server.use(express.json());
const contacts = [
  {
    name: "samady",
  },
];

server.get("/", () => {
  console.log("executando a rota / com o GET e nodemon");
});

server.get("/contact", (req, res) => {
  return res.json(contacts);
});

// Adiciona a lista
server.post("/contact", (req, res) => {
  const { name } = req.body;
  contacts.push(req.body);
  return res.json(contacts);
});

server.put("/contact/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  contacts[index] = name;
  return res.json(contacts);
});
