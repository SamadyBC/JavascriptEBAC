const express = require("express");

const routes = express.Router();

const PropertiesController = require("./controllers/PropertiesController");

//Padrao Rest
routes.get("/properties", PropertiesController.read);

routes.post("/properties", PropertiesController.create);

routes.delete("/properties", PropertiesController.delete);

routes.put("/properties", PropertiesController.update);

routes.get("/", (request, response) => {
  return response.json({
    nome: "Samady",
    sobrenome: "Correa",
  });
});

module.exports = routes;
