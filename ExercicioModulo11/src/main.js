const elem = document.getElementById("title");
elem.innerHTML = "Rodando Node.js";

/*
const elem = $("#title");
elem.html("Rodando Node.js");
*/
const actionSelect = document.getElementById("action");
const containerInsertions = document.getElementById("container");
const insertBeforeButton = document.getElementById("ref-button");
var dataInput; // = document.getElementById("data-input");

function adicionarInput() {
  // Cria o elemento input
  var input = document.createElement("input");

  // Define os atributos do input
  input.type = "text";
  input.id = "data-input";
  input.name = "name";

  //Retorna input
  return input;
}

actionSelect.addEventListener("change", function () {
  if (this.value === "get") {
    dataInput.remove();
  } else {
    let elemento = document.getElementById("data-input");
    if (!elemento) {
      dataInput = adicionarInput();
    }
    if (this.value === "post") {
      dataInput.placeholder = "Digite o nome a ser cadastrado";
      dataInput.type = "text";
    } else {
      dataInput.placeholder = "Digite o índice";
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
        //fetchRequest('GET', url);
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
        //fetchRequest('POST', url, { key: "value" });
        const name = document.getElementById("data-input").value;
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
        break;
      case "put":
        //fetchRequest('PUT', url, { key: "value" });
        break;
      case "delete":
        //fetchRequest('DELETE', url);
        break;
      default:
        console.log("Ação não reconhecida.");
    }
  });
/*

const name = document.getElementById("data-input").value;
        const dataToSend = { name: name };
        console.log("Nome a ser incluido: ", dataToSend);
        fetch(url, { method: "post" }, { name: name })
          .then((response) => response.json())
          .then(function (data) {
            if (data.success) {
              let li = document.createElement("li");
              li.innerHTML = `Contato de ${data.name} foi enviado com sucesso!`;
              document.getElementById("list").appendChild(li);
            } else {
              console.error("O envio falhou:", data.message);
            }
          });


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


  <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('ref-button').addEventListener('click', function(event) {
                event.preventDefault(); // Impede o envio do formulário

                // Obtém o valor selecionado
                const action = document.getElementById('action').value;
                const url = "http://localhost:3001/contact";

                // Função para fazer uma requisição usando a Fetch API
                function fetchRequest(method, url, data) {
                    const options = {
                        method: method,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    };

                    if (method === 'GET' || method === 'DELETE') {
                        delete options.body; // GET e DELETE não usam corpo na requisição
                    }

                    fetch(url, options)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Erro na requisição: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(data => console.log("Resposta:", data))
                        .catch(error => console.error("Erro:", error));
                }

                // Executa a ação com base no valor selecionado
                switch (action) {
                    case 'get':
                        fetchRequest('GET', url);
                        break;
                    case 'post':
                        fetchRequest('POST', url, { key: "value" });
                        break;
                    case 'put':
                        fetchRequest('PUT', url, { key: "value" });
                        break;
                    case 'delete':
                        fetchRequest('DELETE', url);
                        break;
                    default:
                        console.log("Ação não reconhecida.");
                }
            });
        });
    </script>
*/
// Tentar Alterar e Excluir os dados atraves desses metodos
