import React from "react";
import "./App.css";
import Toggle from "./components/toggle";
import TicTacToeGame from "./feature/tictactoe";

function App() {
  return (
    <div className="container">
      <Toggle />
      <TicTacToeGame />
    </div>
  );
}

export default App;
