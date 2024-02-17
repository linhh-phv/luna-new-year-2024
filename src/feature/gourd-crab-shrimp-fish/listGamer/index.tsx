import React, { useContext } from "react";
import "./styles.css";
import { GourdCrabShrimpFishContext } from "../context";
import { renderPrice } from "../utils";

const ListGamer = () => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { listGamer } = dataFromContext!;

  const _renderLIstGame = () => {
    return (
      listGamer?.length > 0 &&
      listGamer.map((gamer) => {
        return (
          <div key={gamer.id} className="w-full flex justify-between">
            <div className="flex">
              <div className="text-yellow-400 text-2xl">
                <span className="text-white italic text-xl">
                  {gamer?.dateBet}:
                </span>{" "}
                {gamer?.name} đặt {gamer?.pieces?.name} giá{" "}
                {renderPrice(gamer?.price!)}
              </div>
            </div>
            {gamer?.totalPrice && (
              <div className="text-green-400 text-2xl font-bold mr-2">
                +{renderPrice(gamer?.totalPrice!)}
              </div>
            )}
          </div>
        );
      })
    );
  };
  return (
    <div className="w-full mt-5" id="list-user">
      <div className="text-white text-center text-3xl font-bold">
        DANH SÁCH ĐẶT CƯỢC
      </div>
      <div className="mt-10 ml-2 mr-2">{_renderLIstGame()}</div>
    </div>
  );
};

export default ListGamer;
