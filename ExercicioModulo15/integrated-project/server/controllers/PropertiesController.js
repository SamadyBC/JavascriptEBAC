const Properties = require("../models/PropertiesData");

module.exports = {
  async create(request, response) {
    const { type, title, description } = request.body;
    if (!type || !title) {
      return response.status(400).json({
        error: "Dados incompletos",
      });
    }

    const propertiesCreated = await Properties.create({
      type,
      title,
      description,
    });

    return response.json(propertiesCreated);
  },

  async read(request, response) {
    const propertiesList = await Properties.find();
    return response.json(propertiesList);
  },

  async update(request, response) {
    //Melhorar validacao e imaginar caso de uso condizente
    const update = request.body;
    console.log("Id: ", request.body.type);
    const propertiesList = await Properties.findOne({ type: update.type });

    if (propertiesList) {
      Properties.updateOne({ type: update.type }, { title: "Casa no Campo" })
        .then((result) => {
          response.status(200).json(result);
        })
        .catch((err) => {
          response
            .status(500)
            .json({ error: "Nao foi possivel atualizar o documento" });
        });
    } else {
      response.status(500).json({ error: "Not a valid doc id" });
    }
  },

  async delete(request, response) {
    const deleteObj = request.body;
    console.log("DELETE: ", update);
    const propertiesList = await Properties.findOne({ type: deleteObj.type });

    if (propertiesList) {
      Properties.deleteOne({ type: update.type })
        .then((result) => {
          response.status(200).json(result);
        })
        .catch((err) => {
          response
            .status(500)
            .json({ error: "Nao foi possivel atualizar o documento" });
        });
    } else {
      response.status(500).json({ error: "Not a valid doc id" });
    }
  },
};
