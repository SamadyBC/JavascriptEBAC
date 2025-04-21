//Arquivo principal da importacao do backend;

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Configure CORS to allow requests from http://localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
