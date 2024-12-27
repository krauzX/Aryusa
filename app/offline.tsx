import React, { useEffect, useState } from "react";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index: number) => {
    if (!board[index]) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const renderCell = (index: number) => (
    <div
      key={index}
      onClick={() => handleClick(index)}
      className="w-20 h-20 flex items-center justify-center border-2 text-2xl font-bold cursor-pointer"
    >
      {board[index]}
    </div>
  );

  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((_, index) => renderCell(index))}
    </div>
  );
};

const OfflinePage: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800">
    <h1 className="text-4xl font-bold mb-4">You are offline</h1>
    <p className="mb-8">
      But don't worry, you can play Tic-Tac-Toe while you wait!
    </p>
    <TicTacToe />
  </div>
);

export default OfflinePage;
