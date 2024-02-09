import React, { ChangeEvent, useContext, useState } from "react";
import { GourdCrabShrimpFishContext } from "../../context";

interface IProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  nameValue: string;
  onNameChange: (text: string) => void;
  dropdownRef: any;
  onClose: () => void;
}
const DropdownInput: React.FC<IProps> = ({
  isOpen,
  toggleDropdown,
  nameValue,
  onNameChange,
  dropdownRef,
  onClose,
}) => {
  const dataFromContext = useContext(GourdCrabShrimpFishContext);
  const { listGamerJoined } = dataFromContext!;

  return (
    <div ref={dropdownRef} className="relative">
      <div className="">
        <label htmlFor="nameField" className="block text-white text-2xl">
          Nhập tên
        </label>
        <input
          id="nameField"
          type="text"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={nameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onNameChange(event.target.value)
          }
          onClick={toggleDropdown}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {listGamerJoined?.length > 0 &&
              listGamerJoined.map((_gamer) => {
                return (
                  <button
                    onClick={() => onNameChange(_gamer?.name)}
                    key={_gamer.id}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                  >
                    {_gamer.name}
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
