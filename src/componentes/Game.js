// Componente principal que controla a lógica do jogo.

import React, { useState } from "react";
import Board from "./Board";
import "../styles/styles.css";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Função para determinar o vencedor
  const calculateWinner = (squares) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Linhas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Colunas
      [0, 4, 8],
      [2, 4, 6], // Diagonais
    ];

    for (let [a, b, c] of winningCombinations) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Retorna "X" ou "O"
      }
    }
    return null; // Retorna null se ninguém ganhou ainda
  };
  // Função chamada ao clicar em um quadrado
  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return; // Impede jogar em um quadrado preenchido ou continuar após vitória

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Função para resetar o jogo
  const resetGame = () => {
    setSquares(Array(9).fill(null)); // Zera os quadrados
    setXIsNext(true); // X começa jogando novamente
  };

  // Verifica se há um vencedor
  const winner = calculateWinner(squares);
  const status = winner
    ? `${winner} ganhou! 🎉`
    : `Vez de: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <h1>Jogo da Velha</h1>
      <h2 className="status">{status}</h2>
      <Board squares={squares} onClick={handleClick} />
      <button className="reset-btn" onClick={resetGame}>
        🔄 Resetar Jogo
      </button>
    </div>
  );
};

export default Game;
