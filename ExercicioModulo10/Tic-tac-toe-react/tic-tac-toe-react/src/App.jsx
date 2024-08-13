import { useState } from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe";
import Board from "./components/Board";
import Tiles from "./components/Tiles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TicTacToe />
    </>
  );
}

export default App; /**/
