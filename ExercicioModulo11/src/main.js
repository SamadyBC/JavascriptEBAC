const elem = document.getElementById("title");
elem.innerHTML = "Rodando Node.js";

const actionSelect = document.getElementById("action");
const containerInsertions = document.getElementById("container");
const insertBeforeButton = document.getElementById("ref-button");
var dataInput; // = document.getElementById("data-input");
let dataInput2;

function adicionarInput(id) {
  // Cria o elemento input
  var input = document.createElement("input");

  // Define os atributos do input
  input.type = "text";
  input.id = "data-input-" + id;
  input.name = "name";

  //Retorna input
  return input;
}

actionSelect.addEventListener("change", function () {
  if (this.value === "get") {
    dataInput.remove();
  } else {
    let elemento = document.getElementById("data-input-0");
    if (!elemento) {
      dataInput = adicionarInput(0);
    }

    if (this.value === "post") {
      dataInput.placeholder = "Digite o nome a ser cadastrado";
      dataInput.type = "text";
      if (document.getElementById("data-input-1")) {
        dataInput2.remove();
      }
    } else if (this.value === "put") {
      dataInput.placeholder = "Digite o índice";
      dataInput.type = "number";

      let input2 = document.getElementById("data-input-1");
      if (!input2) {
        dataInput2 = adicionarInput(1); // Adiciona argumento para que receba id correto
        dataInput2.placeholder = "Digite o nome a ser atualizado";
        dataInput2.type = "text";
        containerInsertions.insertBefore(dataInput2, insertBeforeButton);
      }
    } else {
      if (document.getElementById("data-input-1")) {
        dataInput2.remove();
      }
      dataInput.placeholder = "Digite o indice a ser removido";
      dataInput.type = "number";
    }
    containerInsertions.insertBefore(dataInput, insertBeforeButton);
  }
});

document
  .getElementById("ref-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor selecionado
    const action = document.getElementById("action").value;
    console.log("Requisição: ", action);
    const list = document.getElementById("list");
    const url = "http://localhost:3001/contact";

    switch (action) {
      case "get":
        fetch(url, { method: "get" })
          .then((response) => response.json())
          .then(function (data) {
            data.map((contact) => {
              let li = document.createElement("li");
              li.innerHTML = contact.name;
              list.appendChild(li);
            });
          });
        break;
      case "post":
        const name = document.getElementById("data-input-0").value;
        const dataToSend = { name: name };
        fetch(url, {
          method: "POST", // Especifica o método POST
          headers: {
            "Content-Type": "application/json", // Especifica o tipo de conteúdo como JSON
          },
          body: JSON.stringify(dataToSend), // Converte os dados para uma string JSON
        })
          .then((response) => response.json())
          .then(function (data) {
            // Manipula a resposta do servidor
            console.log(data);
            if (data.success) {
              console.log("Contato adicionado com sucesso!");
              console.log("Contatos:", data.contacts);
              let li = document.createElement("li");
              li.innerHTML = dataToSend.name;
              document.getElementById("list").appendChild(li);
            } else {
              console.error("O envio falhou:", data.message);
            }
          })
          .catch(function (error) {
            console.error("Erro na requisição:", error);
          });
        break;
      case "put":
        const updatedData = document.getElementById("data-input-1").value;
        const dataToUpdate = { name: updatedData };
        const index = document.getElementById("data-input-0").value;
        const putUrl = url + "/" + index;

        fetch(putUrl, {
          method: "PUT", // Especifica o método PUT
          headers: {
            "Content-Type": "application/json", // Especifica o tipo de conteúdo como JSON
          },
          body: JSON.stringify(dataToUpdate), // Converte os dados para uma string JSON
        })
          .then((response) => response.json())
          .then(function (data) {
            // Manipula a resposta do servidor
            if (data.success) {
              console.log(
                `Contato de ${dataToUpdate.name} foi atualizado com sucesso!`
              );
            } else {
              console.error("A atualização falhou:", data.message);
            }
          })
          .catch(function (error) {
            console.error("Erro na requisição:", error);
          });
        break;
      case "delete":
        const indexDel = document.getElementById("data-input-0").value;
        const delUrl = url + "/" + indexDel;
        console.log(delUrl);

        fetch(delUrl, {
          method: "DELETE", // Especifica o método DELETE
          headers: {
            "Content-Type": "application/json", // Especifica o tipo de conteúdo como JSON
          },
          //body: JSON.stringify({ name: contactName }) // Converte o nome do contato para uma string JSON
        })
          .then((response) => response.json())
          .then(function (data) {
            // Manipula a resposta do servidor
            if (data.success) {
              console.log("Contato Removido com sucesso");
            } else {
              console.error("A exclusão falhou:", data.message);
            }
          })
          .catch(function (error) {
            console.error("Erro na requisição:", error);
          });
        break;
      default:
        console.log("Ação não reconhecida.");
    }
  });
