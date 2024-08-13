import { useState } from "react";
import Board from "./Board";
import { useEffect } from "react";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  // Rows
  { combo: [0, 1, 2], strike: "strike-row-1" },
  { combo: [3, 4, 5], strike: "strike-row-2" },
  { combo: [6, 7, 8], strike: "strike-row-3" },
  // Columns
  { combo: [0, 3, 6], strike: "strike-column-1" },
  { combo: [1, 4, 7], strike: "strike-column-2" },
  { combo: [2, 5, 8], strike: "strike-column-3" },
  // Diagonal
  { combo: [0, 4, 8], strike: "strike-diagonal-1" },
  { combo: [2, 4, 6], strike: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass) {
  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
    }
  }
}

function TicTacToe() {
  const [tiles, SetTiles] = useState(Array(9).fill(null));
  const [playerTurn, SetPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();

  const handleTileClick = (index) => {
    if (tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles]; // O que significa essa sintaxe?
    newTiles[index] = playerTurn;
    SetTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      SetPlayerTurn(PLAYER_O);
    } else {
      SetPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass);
  }, [tiles]);

  return (
    <div>
      <h1>TicTacToe</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
    </div>
  );
}

export default TicTacToe;
