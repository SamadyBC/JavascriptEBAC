import "./App.css";
//import Button from "./Button";
import * as React from "react";
import Counter from "./Counter";
import CounterState from "./Counter2";
import { Title, Btn, BtnNew, Subtitle, Item } from "./styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import foto from "../Assets/Samady_Perfil.jpg";

//const label = { inputProps: { "aria-label": "Switch demo" } };
//const [value, setValue] = (React.useState < number) | (null > 2);

function App() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value0, setValue0] = React.useState(5);
  const [value1, setValue1] = React.useState(4);
  const [value2, setValue2] = React.useState(3);
  const [value3, setValue3] = React.useState(3);
  const [value4, setValue4] = React.useState(2);

  return (
    <div>
      <Title>
        <Avatar alt="Foto de Samady Correa" src={foto} />
        Samady Correa
        <span> Dev Full Stack</span>
      </Title>
      <Subtitle>Habilidades</Subtitle>
      <Box sx={{ "& > legend": { mt: 4 } }}>
        <Typography component="legend">Javascript</Typography>
        <Rating
          name="simple-controlled"
          value={value0}
          onChange={(event, newValue) => {
            setValue0(newValue);
          }}
        />
      </Box>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Node.js</Typography>
        <Rating
          name="simple-controlled"
          value={value1}
          onChange={(event, newValue) => {
            setValue1(newValue);
          }}
        />
      </Box>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Express.js</Typography>
        <Rating
          name="simple-controlled"
          value={value2}
          onChange={(event, newValue) => {
            setValue2(newValue);
          }}
        />
      </Box>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Jquery.js</Typography>
        <Rating
          name="simple-controlled"
          value={value3}
          onChange={(event, newValue) => {
            setValue3(newValue);
          }}
        />
      </Box>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Webpack.js</Typography>
        <Rating
          name="simple-controlled"
          value={value4}
          onChange={(event, newValue) => {
            setValue4(newValue);
          }}
        />
      </Box>
      <hr />
      <Subtitle>Formação:</Subtitle>
      <Item>
        Engenharia de Computacao - Universidade Federal de Santa Catarina
      </Item>
      <Item>Curso Javascript - EBAC</Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}

export default App;
