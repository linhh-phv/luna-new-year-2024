import React, { ChangeEvent, useCallback, useContext, useState } from "react";
import { GourdCrabShrimpFishContext } from "../context";
import FullScreenPopup from "../../../components/popup";
import { genUUID } from "../../../utils";

const GameInfo = () => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { listGamerJoined, dispatch } = dataFromContext!;

  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  const [nameValue, setNameValue] = useState<string>("");

  const _onOpenPopup = useCallback(() => {
    setVisiblePopup(true);
  }, []);

  const _onClosePopup = useCallback(() => {
    setVisiblePopup(false);
  }, []);

  const _onAddGamer = () => {
    if (nameValue) {
      const _findGamer = listGamerJoined?.findIndex(
        (_gamer) =>
          _gamer.name.toLowerCase().trim() === nameValue.toLowerCase().trim()
      );
      if (_findGamer === -1) {
        dispatch({
          type: "gamerJoin",
          payload: {
            gamer: {
              id: genUUID(),
              name: nameValue,
              numTurns: 0,
              totalPrice: 0,
            },
          },
        });
      } else {
        alert("Trùng tên");
      }
    }
  };

  const _onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const _name = event.target.value.trim();
    setNameValue(_name);
  };

  const _renderAddGamer = () => {
    return (
      <div className="mt-5">
        <div className="flex justify-between">
          <label htmlFor="priceField" className="block  text-2xl">
            Nhập tên
          </label>

          <button onClick={_onAddGamer} className="text-green-700  text-2xl">
            Thêm
          </button>
        </div>
        <input
          id="priceField"
          type="text"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={nameValue}
          onChange={_onNameChange}
        />
      </div>
    );
  };

  const _renderListGamerJoined = () => {
    return (
      <FullScreenPopup isOpen={visiblePopup} onClose={_onClosePopup}>
        <div className="text-center text-yellow-600 text-3xl">
          DANH SÁCH NGƯỜI CHƠI
        </div>

        {_renderAddGamer()}

        <div className="flex justify-center items-center mt-5">
          <table className="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Số thứ tự</th>
                <th className="border border-gray-400 px-4 py-2">Tên</th>
                <th className="border border-gray-400 px-4 py-2">
                  Số ván chơi
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Số tiền thắng thua{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {listGamerJoined.map((row, index) => (
                <tr key={row.id}>
                  <td className="border border-gray-400 px-4 py-2 w-[15%]">
                    {index + 1}.
                  </td>
                  <td className="border border-gray-400 px-4 py-2 w-[20%]">
                    {row?.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 w-[20%]">
                    {row?.numTurns ?? 0}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 w-[20%]">
                    {row?.totalPrice ?? 0} nghìn
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FullScreenPopup>
    );
  };

  // {listGamerJoined?.length > 0 &&
  //   listGamerJoined.map((_gamer, index) => {
  //     return (
  //       <div className="w-full " key={_gamer.id}>
  //         {/* <div className="">{`${index + 1}. ${_gamer.name}`}</div> */}
  //       </div>
  //     );
  //   })}

  return (
    <div className="w-full h-[60px] flex justify-between pl-16 pr-16 pt-5">
      <div className="h-full flex justify-center items-center">
        <img
          className="h-full w-[60px]"
          alt="hinh ne"
          src={
            "./image/gourd-crab-shrimp-fish/logo-game-gourd-crab-shrimp-fish.png"
          }
        />
        <div className="text-5xl ml-5 text-yellow-500 bg-white pl-5 pr-5 pt-5 rounded-tr-full">
          BẦU CUA
        </div>
      </div>
      <div className="flex">
        <div className="mr-5" onClick={_onOpenPopup}>
          <span className="text-white">Danh sách người chơi</span>
        </div>
        <div className="mr-5">sound</div>
        <div className="">help</div>
      </div>
      {_renderListGamerJoined()}
    </div>
  );
};

export default GameInfo;
