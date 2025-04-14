//Arquivo principal da importacao do backend;

const express = require("express");
const routes = require("./routes");
require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
