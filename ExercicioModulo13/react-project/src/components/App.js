import "./App.css";
//import Button from "./Button";
import * as React from "react";
import Counter from "./Counter";
import CounterState from "./Counter2";
import { Title, Btn, BtnNew } from "./styles";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

//const label = { inputProps: { "aria-label": "Switch demo" } };
//const [value, setValue] = (React.useState < number) | (null > 2);

function App() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Title>
        Styled Components
        <span> com react</span>
      </Title>
      <Switch {...label} />
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
      <Counter />
      <hr />
      <CounterState />
      <hr />
      <Btn name="React Button" font="50" />
      <BtnNew name="React Button" font="50" />
    </div>
  );
}

export default App;
