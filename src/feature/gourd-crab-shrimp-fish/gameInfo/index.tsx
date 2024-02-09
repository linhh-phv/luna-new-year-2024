import React, { useContext } from "react";
import { GourdCrabShrimpFishContext } from "../context";

const GameInfo = () => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);

  return (
    <div className="w-full h-[100px] flex justify-between pl-16 pr-16 pt-5">
      <div className="h-full flex justify-center items-center">
        <img
          className="h-[100px] w-[100px]"
          alt="hinh ne"
          src={
            "./image/gourd-crab-shrimp-fish/logo-game-gourd-crab-shrimp-fish.png"
          }
        />
        <div className="text-5xl ml-10 text-yellow-500 bg-white pl-5 pr-5 pt-5 rounded-tr-full">
          BẦU CUA
        </div>
      </div>
      <div className="flex">
        <div className="mr-5">
          <span className="text-white">
            Tiền thưởng: <span>{dataFromContext?.totalScore}$</span>
          </span>
        </div>
        <div className="mr-5">sound</div>
        <div className="">help</div>
      </div>

      {/* <p style={{ color: "green" }} className="display-4 p-3">
        GAME BẦU CUA
      </p>
      <div className="mt-3">
        <span
          className="text-white bg-danger p-3"
          style={{ fontSize: "20px", borderRadius: "5%" }}
        >
          Tiền thưởng: <span>{100}$</span>
        </span>
      </div>
      <div className="mt-5">
        <button
          className="btn btn-success"
          style={{ fontSize: 18 }}
          onClick={() => {
            // dispatch(playAgain());
          }}
        >
          Chơi lại
        </button>
      </div> */}
    </div>
  );
};

export default GameInfo;
