// app/offline/page.tsx
"use client";

import React, { useState } from "react";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board: string[]) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderCell = (index: number) => (
    <div
      key={index}
      onClick={() => handleClick(index)}
      className="w-20 h-20 flex items-center justify-center border-2 border-gray-500 text-2xl font-bold cursor-pointer text-white bg-black"
    >
      {board[index]}
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((_, index) => renderCell(index))}
      </div>
      {winner && <div className="mb-4 text-white">Winner: {winner}</div>}
      <button className="btn btn-primary" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
};

const OfflinePage: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <h1 className="text-4xl font-bold mb-4">You are offline</h1>
    <p className="mb-8">
      But don&apos;t worry, you can play Tic-Tac-Toe while you wait!
    </p>
    <TicTacToe />
  </div>
);

export default OfflinePage;
