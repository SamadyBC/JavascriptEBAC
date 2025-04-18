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
    //Caso de uso: id enviado pela URL
    const { id } = request.params;
    //Valores a serem atualizados passados na requisição
    const { type, title, description } = request.body;
    const propertiesList = await Properties.findOne({ _id: id });

    if (propertiesList) {
      if (type || description || title) {
        propertiesList.type = type ? type : propertiesList.type;
        propertiesList.title = title ? title : propertiesList.title;
        propertiesList.description = description
          ? description
          : propertiesList.description;
        await propertiesList
          .save()
          .then((result) => {
            response.status(200).json(result);
          })
          .catch((err) => {
            response
              .status(500)
              .json({ error: "Nao foi possivel atualizar o documento" });
          });
      }
    } else {
      response.status(500).json({ error: "Id Invalido" });
    }
  },

  async delete(request, response) {
    // Recebe o id por parametro na URL
    const deleteObjId = request.params;
    const propertiesList = await Properties.findByIdAndDelete({
      _id: deleteObjId.id,
    });

    if (propertiesList) {
      response.status(200).json();
    } else {
      response.status(500).json({ error: "Id Invalido" });
    }
  },
};
