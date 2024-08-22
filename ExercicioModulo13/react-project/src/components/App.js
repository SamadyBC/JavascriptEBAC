import "./App.css";
import Button from "./Button";
import Counter from "./Counter";
import CounterState from "./Counter2";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <CounterState />
      <hr />
      <Button name="React Button" />
    </div>
  );
}

export default App;
