import React, { useReducer } from "react";
import "./styles.css";
import BoardTicTacToeGame from "./components/board";
import { calWin } from "./utils";
import { ITicTacToe } from "./model/tictactoe";
import { initState, reducer } from "./state";

const TicTacToeGame: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { board, xIsNext } = state;
  const winner = calWin(board);

  const _onPlay = (cell: ITicTacToe) => {
    dispatch({ type: "play", payload: { cell, winner } });
  };
  const _onResetGame = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      {winner ? (
        <div onClick={_onResetGame} className="replay">
          {`Winner is ${!xIsNext ? "x" : "o"} `}
        </div>
      ) : (
        <BoardTicTacToeGame cells={board} onPlay={_onPlay} />
      )}
      <button onClick={_onResetGame} className="replay">
        Re Play
      </button>
    </div>
  );
};
export default TicTacToeGame;
