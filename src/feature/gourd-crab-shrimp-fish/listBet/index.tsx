import React, { ChangeEvent, useContext, useState } from "react";
import "./styles.css";
import { GourdCrabShrimpFishContext } from "../context";
import { IGamer, IPrice } from "../model";

interface IProps {}

const ListBet: React.FC<IProps> = () => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { listPrice, currentPieces, dispatch, currentGamer } = dataFromContext!;

  const [nameValue, setNameValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");

  const _onChoosePrice = (price: IPrice) => {
    if (price?.value?.toString() === priceValue) {
      setPriceValue("");
    } else {
      const _price = price.value?.toString().trim();
      const _gamer: IGamer = {
        ...currentGamer,
        price: Number(_price),
      };
      setPriceValue(_price);
      dispatch({ type: "gamerChoosed", payload: { gamer: _gamer } });
    }
  };

  const _onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const _name = event.target.value.trim();
    const _gamer: IGamer = {
      ...currentGamer,
      name: _name,
    };
    setNameValue(_name);
    dispatch({ type: "gamerChoosed", payload: { gamer: _gamer } });
  };
  const _onPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const _price = event.target.value.trim();
    const _gamer: IGamer = {
      ...currentGamer,
      price: Number(_price),
    };
    setPriceValue(_price);
    dispatch({ type: "gamerChoosed", payload: { gamer: _gamer } });
  };

  const _onPlaceABet = () => {
    const _gamer: IGamer = {
      ...currentGamer,
      dateBet: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      pieces: currentPieces,
    };
    setNameValue("");
    setPriceValue("");
    dispatch({ type: "placeABet", payload: { gamer: _gamer } });
  };
  const _onReset = () => {
    setNameValue("");
    setPriceValue("");
    dispatch({ type: "choosePieces", payload: { pieces: undefined } });
  };

  const _renderNameField = () => {
    return (
      <div className="">
        <label htmlFor="nameField" className="block text-white text-2xl">
          Nhập tên
        </label>
        <input
          id="nameField"
          type="text"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={nameValue}
          onChange={_onNameChange}
        />
      </div>
    );
  };

  const _renderPriceield = () => {
    return (
      <div className="mt-5">
        <label htmlFor="priceField" className="block text-white text-2xl">
          Nhập giá cược
        </label>
        <input
          id="priceField"
          type="text"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={priceValue}
          onChange={_onPriceChange}
        />
      </div>
    );
  };

  const _renderBet = () => {
    return (
      listPrice?.length > 0 &&
      listPrice.map((price) => {
        const _isSelectedPrice = price.value?.toString() === priceValue;
        const _style = `h-[115px] ${
          _isSelectedPrice ? "ring-4 ring-blue-500 rounded-2xl p-1" : ""
        }`;
        return (
          <div
            onClick={() => _onChoosePrice(price)}
            className={_style}
            key={price.id}
          >
            <img className="w-full h-full" alt="hinh ne" src={price.image} />
          </div>
        );
      })
    );
  };

  const _renderBtnReset = () => {
    return (
      <div className="flex justify-end mt-10">
        <button className="text-2xl text-white" onClick={_onReset}>
          Không Cược
        </button>
      </div>
    );
  };

  const _renderPlaceABet = () => {
    const _style = `flex justify-center mt-10 ${
      !nameValue || !priceValue ? "opacity-[0.7] pointer-events-none" : ""
    }`;
    return (
      <div className={_style}>
        <button
          className="text-3xl text-yellow-600 bg-white p-1 pl-4 pr-4 rounded-lg"
          onClick={_onPlaceABet}
        >
          Cược
        </button>
      </div>
    );
  };

  const style = `w-full bg-red-900 flex p-4 rounded-2xl ${
    !currentPieces ? "opacity-[0.7] pointer-events-none" : ""
  }`;
  return (
    <div className={style} id="list-bet">
      <div className="w-[25%] mr-4">
        {_renderNameField()}
        {_renderPriceield()}
      </div>
      <div className="w-full h-full flex justify-between items-center">
        {_renderBet()}
      </div>
      <div className="w-[20%]">
        {_renderPlaceABet()}
        {_renderBtnReset()}
      </div>
    </div>
  );
};

export default ListBet;
