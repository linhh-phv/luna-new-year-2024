// Dice.js

import React, { useContext } from "react";
import "./styles.css";
import { IDice } from "../../model";
import { GourdCrabShrimpFishContext } from "../../context";
import { randomIndex } from "../../utils";
interface IProps {
  dice: IDice;
  defaultIndex: number;
}

const Dice: React.FC<IProps> = ({ dice, defaultIndex }) => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { listPieces, rolling } = dataFromContext!;

  return (
    <div className="dice-container">
      <div className={`dice ${rolling ? "rolling" : ""}`}>
        {rolling ? (
          <>
            <div className="front">
              <img alt="hinh ne" src={listPieces[randomIndex()].image} />
            </div>
            <div className="back">
              <img alt="hinh ne" src={listPieces[randomIndex()].image} />
            </div>
            <div className="top">
              <img alt="hinh ne" src={listPieces[randomIndex()].image} />
            </div>
            <div className="bottom">
              <img alt="hinh ne" src={listPieces[randomIndex()].image} />
            </div>
            <div className="left">
              <img alt="hinh ne" src={listPieces[randomIndex()].image} />
            </div>
            <div className="right">
              <img alt="hinh ne" src={listPieces[randomIndex()].image} />
            </div>
          </>
        ) : (
          <div className="front">
            <img
              alt="hinh ne"
              src={dice?.image ?? listPieces[defaultIndex].image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dice;
