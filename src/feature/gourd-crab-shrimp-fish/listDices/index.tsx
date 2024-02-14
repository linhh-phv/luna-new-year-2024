import React, { useContext, useEffect } from "react";
import { IDice } from "../model";
import Dice from "../components/dice";
import { GourdCrabShrimpFishContext } from "../context";
import { randomIndex } from "../utils";
import "./styles.css";

interface IProps {}

const ListDices: React.FC<IProps> = ({}) => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { dispatch, listDiceResult, listPieces, rolling, gameDone } =
    dataFromContext!;

  const _onPlay = () => {
    if (gameDone) {
      dispatch({ type: "reset" });
    } else {
      dispatch({ type: "play" });
    }
  };

  useEffect(() => {
    if (rolling) {
      setTimeout(() => {
        let _arrDice: IDice[] = [];
        for (let i = 0; i < 3; i++) {
          const newValue = randomIndex();
          _arrDice.push(listPieces[newValue]);
        }
        dispatch({ type: "playResult", payload: { arrDice: _arrDice } });
      }, 2000);
    }
  }, [dispatch, listPieces, rolling]);

  const _renderDice = () => {
    return (
      <div className="bg-image w-[360px] h-[360px] rounded-full">
        <div className="flex justify-between ">
          <div className="mt-[25%] ml-[15%]">
            <Dice dice={listDiceResult[0]} defaultIndex={randomIndex()} />
          </div>
          <div className="mt-[25%] m-[15%]">
            <Dice dice={listDiceResult[1]} defaultIndex={randomIndex()} />
          </div>
        </div>
        <div className="flex justify-center ">
          <Dice dice={listDiceResult[2]} defaultIndex={randomIndex()} />
        </div>
      </div>
    );
  };
  const _renderBtnBet = () => {
    return (
      <div className="flex justify-center mt-10">
        <button
          className="text-5xl text-red-500 bg-white pl-4 pr-4 pt-2 rounded-lg"
          onClick={_onPlay}
        >
          {`${gameDone ? "Chơi lại" : "Xốc"}`}
        </button>
      </div>
    );
  };
  return (
    <div className="flex items-center h-screen">
      <div className="">
        {_renderDice()}
        {_renderBtnBet()}
      </div>
    </div>
  );
};

export default ListDices;
