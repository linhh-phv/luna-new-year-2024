import { ITicTacToe } from "../model/tictactoe";

const genBoard = () => {
  const _arr: ITicTacToe[] = [];
  for (let i = 0; i < 9; i++) {
    _arr.push({ id: i, value: null });
  }
  return _arr;
};

const calWin = (cells: ITicTacToe[]): ITicTacToe | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (
      cells[a].value &&
      cells[a].value === cells[b].value &&
      cells[a].value === cells[c].value
    ) {
      return cells[a];
    }
  }
  return null;
};
export { calWin, genBoard };
