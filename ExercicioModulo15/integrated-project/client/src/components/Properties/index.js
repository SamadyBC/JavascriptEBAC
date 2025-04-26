import React, { Component, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const baseUrl = "http://localhost:5000/properties";

const initialState = {
  propertie: {
    _id: "",
    type: "",
    title: "",
    description: "",
  },
};

export default class Properties extends Component {
  /* Define estado inicial*/
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  /* Limpa formulário */
  clear() {
    this.setState({ propertie: initialState.propertie });
  }

  /* Cria Imóvel */
  save() {
    const propertie = this.state.propertie; // recebe as propriedades da instancia da classe em questao
    const method = propertie._id ? "put" : "post"; // methodo HTTP - se o id do imóvel já existe, atualiza, senão cria um novo
    const url = propertie._id ? `${baseUrl}/${propertie._id}` : `${baseUrl}`; // se o id existe anexa a url o id, senao somente o baseUrl
    axios[method](url, propertie) // axios é uma biblioteca para fazer requisições HTTP - pesquisar axios
      .then((response) => {
        //aqui
        // promise
        const list = this.getUpdatedList(response.data);
        this.setState({ propertie: initialState.propertie, list });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Atualiza Imóvel */
  update(event) {
    const propertie = { ...this.state.propertie };
    propertie[event.target.name] = event.target.value;
    this.setState({ propertie });
  }

  componentDidMount() {
    axios
      .get(baseUrl)
      .then((response) => {
        this.setState({ list: response.data }); //
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Atualiza lista de imóveis */
  getUpdatedList(propertie) {
    console.log("Get update 2: ", propertie);
    const list = this.state.list.filter((p) => p._id !== propertie._id);
    if (propertie) {
      list.unshift(propertie);
    }
    return list;
  }

  /* Lista Imóveis */
  mapProperties(properties) {
    return this.state.list?.map((response) => {
      return this.getListItem(response);
    });
  }

  renderProperties() {
    const properties = this.state.list;
    return <List>{this.mapProperties(properties)}</List>;
  }

  getListItem(response) {
    return (
      <ListItem
        alignItems="flex-start"
        key={response._id}
        sx={{
          display: "flex",
          justifyContent: "space-between", // empurra botões para a direita
          alignItems: "center",
        }}
      >
        {/* Esquerda: Avatar e Texto */}
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <ListItemAvatar>
            <Avatar alt="Foto" src="https://picsum.photos/200/300?random=1" />
          </ListItemAvatar>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <Tooltip title={response.type}>
                <h3>{response.title}</h3>
              </Tooltip>
            </Typography>
            <Typography variant="body2">{response.description}</Typography>
          </Box>
        </Box>
        {/* Direita: Botões de Ação */}
        <Box className="actions" sx={{ display: "flex", gap: "0.5rem" }}>
          <button className="btn-edit" onClick={() => this.load(response)}>
            Alterar
          </button>
          <button className="btn-delete" onClick={() => this.remove(response)}>
            Deletar
          </button>
        </Box>
      </ListItem>
    );
  }

  /* Carrega Imóvel */
  load(propertie) {
    this.setState({ propertie });
  }

  /* Remove Imóvel */
  remove(propertie) {
    console.log(propertie);
    axios.delete(`${baseUrl}/${propertie._id}`).then((response) => {
      const list = this.state.list.filter((p) => p._id !== propertie._id);
      this.setState({ list });
    });
  }

  /* Renderiza formulário de cadastro */
  renderForm() {
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {this.state.propertie._id}
        <TextField
          valiant="outlined"
          type="text"
          name="title"
          value={this.state.propertie.title}
          onChange={(e) => this.update(e)}
          placeholder="digite o título do anúncio"
        />

        <TextField
          valiant="outlined"
          type="text"
          name="type"
          value={this.state.propertie.type}
          onChange={(e) => this.update(e)}
          placeholder="digite o tipo do imóvel"
        />

        <TextField
          valiant="outlined"
          type="text"
          name="description"
          value={this.state.propertie.description}
          onChange={(e) => this.update(e)}
          placeholder="digite a descrição"
        />

        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={(e) => this.save(e)}>
            Salvar
          </Button>
          <Button variant="text" onClick={(e) => this.clear(e)}>
            Cancelar
          </Button>
        </Stack>
      </Box>
    );
  }

  /* Renderiza formulário e lista */
  render() {
    console.log(this.state.list);
    return (
      <div className="content">
        <div className="form-section">{this.renderForm()}</div>
        <div className="list-section">{this.renderProperties()}</div>
      </div>
    );
  }
}
