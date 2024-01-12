import React from "react";
import "./styles.css";
import { ITicTacToe } from "../../model/tictactoe";

interface IProps {
  cell: ITicTacToe;
  onPlay: (cell: ITicTacToe) => void;
}

const CellTicTacToeGame: React.FC<IProps> = ({ cell, onPlay }) => {
  return (
    <div
      onClick={() => onPlay(cell)}
      className={`cell-game ${cell.value === "x" ? "is-x" : "is-o"}`}
    >
      {cell.value}
    </div>
  );
};

export default CellTicTacToeGame;
