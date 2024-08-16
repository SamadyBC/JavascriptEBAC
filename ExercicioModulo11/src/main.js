const elem = document.getElementById("title");
elem.innerHTML = "Rodando Node.js";

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

// Tentar Alterar e Excluir os dados atraves desses metodos
