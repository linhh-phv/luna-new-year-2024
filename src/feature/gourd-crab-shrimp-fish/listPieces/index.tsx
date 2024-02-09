import React, { useContext } from "react";
import { GourdCrabShrimpFishContext } from "../context";
import Pieces from "../components/pieces";

const ListPieces = () => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { listPieces, currentPieces, gameDone } = dataFromContext!;

  const _renderListPieces = () => {
    return (
      listPieces?.length > 0 &&
      listPieces.map((item) => {
        const _isSelected = item.id === currentPieces?.id;
        return (
          <div
            key={item.id}
            className="h-[100%] flex justify-center items-center"
          >
            <Pieces pieces={item} isSelected={_isSelected} />
          </div>
        );
      })
    );
  };

  const style = `grid grid-cols-3 gap-5 h-full ${
    gameDone ? "opacity-[0.7] pointer-events-none" : ""
  }`;
  return (
    <div className="h-full">
      <div className={style}>{_renderListPieces()}</div>
    </div>
  );
};

export default ListPieces;
