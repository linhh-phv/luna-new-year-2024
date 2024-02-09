import { createContext } from "react";
import { IDice, IGamer, IPieces, IPrice } from "../model";
import { GameAction } from "../state";

interface ISharedGourdCrabShrimpFish {
  totalScore: number;
  listPieces: IPieces[];
  listPrice: IPrice[];
  listDiceResult: IDice[];
  dispatch: (callback: GameAction) => void;
  rolling: boolean;
  currentPieces?: IPieces;
  listGamer: IGamer[];
  currentGamer?: IGamer;
  gameDone: boolean;
}
export const GourdCrabShrimpFishContext =
  createContext<ISharedGourdCrabShrimpFish | null>(null);
