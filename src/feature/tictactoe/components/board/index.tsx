import React from "react";
import "./styles.css";
import CellTicTacToeGame from "../cell";
import { ITicTacToe } from "../../model/tictactoe";

interface IProps {
  cells: ITicTacToe[];
  onPlay: (cell: ITicTacToe) => void;
}

const BoardTicTacToeGame: React.FC<IProps> = ({ cells, onPlay }) => {
  return (
    <div className="board-game">
      {cells.map((_item: ITicTacToe) => (
        <CellTicTacToeGame cell={_item} key={_item.id} onPlay={onPlay} />
      ))}
    </div>
  );
};
export default BoardTicTacToeGame;
