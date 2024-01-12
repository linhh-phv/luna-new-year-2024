import { ITicTacToe } from "../model/tictactoe";
import { genBoard } from "../utils";

interface ITicTacToeState {
  board: ITicTacToe[];
  xIsNext: boolean;
}

const initState: ITicTacToeState = {
  board: genBoard(),
  xIsNext: true,
};

type GameAction =
  | { type: "play"; payload: { cell: ITicTacToe; winner: ITicTacToe | null } }
  | { type: "reset" };

const reducer = (
  state: ITicTacToeState,
  action: GameAction
): ITicTacToeState => {
  switch (action.type) {
    case "play":
      const { board, xIsNext } = state;
      const { cell, winner } = action.payload;
      if (winner || board[cell.id].value) return state;

      const nextState = JSON.parse(JSON.stringify(state)); //deep copy
      nextState.board[cell.id].value = xIsNext ? "x" : "o";
      nextState.xIsNext = !xIsNext;

      return nextState;

    case "reset":
      return { board: genBoard(), xIsNext: true };

    default:
      return state;
  }
};

export { reducer, initState };
