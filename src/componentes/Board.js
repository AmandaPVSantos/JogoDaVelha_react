// Componente responsável por renderizar os 9 quadrados.

import React from "react";
import Square from "./Square";
import "../styles/styles.css"; // Importa o CSS

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
