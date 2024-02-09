import React, { useContext } from "react";
import { IPieces } from "../../model";
import { GourdCrabShrimpFishContext } from "../../context";

interface IProps {
  pieces: IPieces;
  isSelected: boolean;
}

const Pieces: React.FC<IProps> = ({ pieces, isSelected }) => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { dispatch } = dataFromContext!;

  const style = `w-[250px] h-[250px] ${
    isSelected ? "ring-4 ring-blue-500 rounded-2xl" : ""
  }`;

  const _onChoosePieces = () => {
    dispatch({ type: "choosePieces", payload: { pieces } });
  };
  return (
    <div className={style} onClick={_onChoosePieces}>
      <img className="w-full h-full " alt="hinh ne" src={pieces.image} />
    </div>
  );
};

export default Pieces;
