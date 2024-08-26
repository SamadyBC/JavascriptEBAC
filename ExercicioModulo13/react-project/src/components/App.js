import "./App.css";
//import Button from "./Button";
import Counter from "./Counter";
import CounterState from "./Counter2";
import { Title, Btn, BtnNew } from "./styles";

function App() {
  return (
    <div>
      <Title>
        Styled Components
        <span> com react</span>
      </Title>
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
