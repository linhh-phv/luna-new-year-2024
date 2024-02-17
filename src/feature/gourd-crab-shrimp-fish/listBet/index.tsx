import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./styles.css";
import { GourdCrabShrimpFishContext } from "../context";
import { IGamer, IPrice } from "../model";
import { genUUID } from "../../../utils";
import DropdownInput from "../components/dropdownGamer";
import { debounce } from "lodash";

interface IProps {}

const ListBet: React.FC<IProps> = () => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const {
    listPrice,
    currentPieces,
    dispatch,
    currentGamer,
    listGamerJoined,
    gameDone,
  } = dataFromContext!;

  const [nameValue, setNameValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const [isOpenNameDropdown, setIsOpenNameDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameDone) {
      setNameValue("");
      setPriceValue("");
    }
  }, [gameDone]);

  const closeDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      _onCloseDropdownName();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const _onChoosePrice = (price: IPrice) => {
    if (currentGamer?.id) {
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
    }
  };

  function _onNameChange(text: string) {
    searchDebounce(text);
    setNameValue(text);
  }

  const searchDebounce = useCallback(
    debounce((text: string) => {
      let _name = text;
      for (let i = 0; i < listGamerJoined.length; i++) {
        const _gamerJoined = listGamerJoined[i];
        if (_gamerJoined.maskId === _name) {
          _name = _gamerJoined.name;
        }
      }

      console.log(";;;;lllll", _name, listGamerJoined);

      const _findGamer = listGamerJoined?.findIndex(
        (_gamer) =>
          _gamer?.name?.trim().toLowerCase() === _name.trim().toLowerCase()
      );
      let _gamer: IGamer;
      if (_findGamer !== -1) {
        _gamer = {
          ...currentGamer,
          name: _name.trim(),
          id: listGamerJoined[_findGamer].id,
        };
      } else {
        _gamer = {
          ...currentGamer,
          name: _name.trim(),
          id: genUUID(),
        };
      }
      setNameValue(_name);
      dispatch({ type: "gamerChoosed", payload: { gamer: _gamer } });
    }, 500),
    [listGamerJoined, currentGamer]
  );

  const _onPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (currentGamer?.id) {
      const _price = event.target.value.trim();
      const _gamer: IGamer = {
        ...currentGamer,
        price: Number(_price),
      };
      setPriceValue(_price);
      dispatch({ type: "gamerChoosed", payload: { gamer: _gamer } });
    }
  };

  const _onPlaceABet = () => {
    if (currentGamer?.id) {
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

      const _findGamer = listGamerJoined?.findIndex(
        (_gamerJoined) => _gamerJoined.id === _gamer.id
      );
      if (_findGamer === -1) {
        dispatch({
          type: "gamerJoin",
          payload: {
            gamer: {
              id: _gamer.id,
              name: _gamer.name!,
              numTurns: 0,
              totalPrice: 0,
            },
          },
        });
      }
    }
  };
  const _onReset = () => {
    setNameValue("");
    setPriceValue("");
    dispatch({ type: "choosePieces", payload: { pieces: undefined } });
  };

  const _onOpenDropdownName = () => {
    setIsOpenNameDropdown(true);
  };
  const _onCloseDropdownName = () => {
    setIsOpenNameDropdown(false);
  };

  const _renderNameField = () => {
    return (
      <DropdownInput
        dropdownRef={dropdownRef}
        isOpen={isOpenNameDropdown}
        nameValue={nameValue}
        onNameChange={_onNameChange}
        toggleDropdown={_onOpenDropdownName}
        onClose={_onCloseDropdownName}
      />
    );
  };

  const _renderPriceield = () => {
    return (
      <div className="mt-5">
        <label htmlFor="priceField" className="block text-white text-2xl">
          Nhập giá
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
          Bỏ Cược
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
      <div className="w-[25%] mr-4 flex justify-center items-center">
        <div className="">
          {_renderNameField()}
          {_renderPriceield()}
        </div>
      </div>
      <div className="w-full h-full flex justify-between items-center">
        {_renderBet()}
      </div>
      <div className="w-[20%] flex justify-center items-center">
        <div className="">
          {_renderPlaceABet()}
          {_renderBtnReset()}
        </div>
      </div>
    </div>
  );
};

export default ListBet;
