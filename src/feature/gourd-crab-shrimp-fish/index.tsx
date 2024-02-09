import React, { useReducer } from "react";
import GameInfo from "./gameInfo";
import { initState, reducer } from "./state";
import ListDices from "./listDices";
import "./styles.css";
import { GourdCrabShrimpFishContext } from "./context";
import ListPieces from "./listPieces";
import ListGamer from "./listGamer";
import ListBet from "./listBet";

const GourdCrabShrimpFish = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    listDiceResult,
    listPieces,
    listPrice,
    totalScore,
    rolling,
    currentPieces,
    listGamer,
    currentGamer,
    gameDone,
  } = state;

  const _renderListGamer = () => {
    return (
      <div className="w-[30%] h-[90vh] bg-slate-600 bg-opacity-90">
        <ListGamer />
      </div>
    );
  };

  const _renderGame = () => {
    return (
      <div className="w-[70%]">
        <div className="flex h-[60vh] justify-between">
          <div className="w-[40%] flex items-center justify-center">
            <ListDices />
          </div>
          <div className="w-[60%]">
            <ListPieces />
          </div>
        </div>
        <div className="flex h-[25vh] ml-[5%]">
          <ListBet />
        </div>
      </div>
    );
  };

  return (
    <GourdCrabShrimpFishContext.Provider
      value={{
        listDiceResult,
        listPieces,
        listPrice,
        totalScore,
        dispatch,
        rolling,
        currentPieces,
        listGamer,
        currentGamer,
        gameDone,
      }}
    >
      <div className="w-full" id="gourd-crab-shrimp-fish">
        <GameInfo />
        <div className="flex justify-between pl-16 pr-16 mt-5">
          {_renderListGamer()}
          {_renderGame()}
        </div>
      </div>
    </GourdCrabShrimpFishContext.Provider>
  );
};

export default GourdCrabShrimpFish;
