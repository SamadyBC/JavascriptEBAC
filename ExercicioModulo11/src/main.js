const elem = document.getElementById("title");
elem.innerHTML = "Rodando Node.js";

const actionSelect = document.getElementById("action");
const dataInput = document.getElementById("data-input");

actionSelect.addEventListener("change", function () {
  if (this.value === "create") {
    dataInput.placeholder = "Digite o nome a ser cadastrado";
    dataInput.type = "text";
  } else {
    dataInput.placeholder = "Digite o índice";
    dataInput.type = "number";
  }
});

const list = document.getElementById("list");
const api = "http://localhost:3001/contact";

//Fetch API -
fetch(api, { method: "get" })
  .then((response) => response.json())
  .then(function (data) {
    data.map((contact) => {
      let li = document.createElement("li");
      li.innerHTML = contact.name;
      list.appendChild(li);
    });
  });
/*
POST to the backend
fetch(api, {
  method: "POST", // Especifica o método POST
  headers: {
    "Content-Type": "application/json" // Especifica o tipo de conteúdo como JSON
  },
  body: JSON.stringify(dataToSend) // Converte os dados para uma string JSON
})
  .then((response) => response.json())
  .then(function (data) {
    // Manipula a resposta do servidor
    if (data.success) {
      let li = document.createElement("li");
      li.innerHTML = `Contato de ${dataToSend.name} foi enviado com sucesso!`;
      document.getElementById("list").appendChild(li);
    } else {
      console.error("O envio falhou:", data.message);
    }
  })
  .catch(function (error) {
    console.error("Erro na requisição:", error);
  });
//PUT to the backend
  fetch(api, {
  method: "PUT", // Especifica o método PUT
  headers: {
    "Content-Type": "application/json" // Especifica o tipo de conteúdo como JSON
  },
  body: JSON.stringify(updatedData) // Converte os dados para uma string JSON
})
  .then((response) => response.json())
  .then(function (data) {
    // Manipula a resposta do servidor
    if (data.success) {
      let li = document.createElement("li");
      li.innerHTML = `Contato de ${updatedData.name} foi atualizado com sucesso!`;
      document.getElementById("list").appendChild(li);
    } else {
      console.error("A atualização falhou:", data.message);
    }
  })
  .catch(function (error) {
    console.error("Erro na requisição:", error);
  });
*/
// Tentar Alterar e Excluir os dados atraves desses metodos
