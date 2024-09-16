import React from "react";
import Board from "./Board";
import { useState } from "react";

const BLOCKED = "X";
const OPENED = "";

const Resume = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [isOPen, setIsOpen] = useState(OPENED);

  const handleTileLoad = (tiles) => {
    const newTiles = [...tiles]; // A copy of the array is being made by this sintax
    //newTiles[index] = playerTurn;
    setTiles(newTiles);

    for (let i = 0; tiles.length(); tiles++) {}

    tiles.forEach((element) => {
      //Random number generator
      //case number is even then receive X
      //case number is odd then receive ''
      setTiles(newTiles);
    });
    return;
  };

  return (
    <div className="resume">
      <h1>Resume</h1>
      <Board />
    </div>
  );
};

export default Resume;
