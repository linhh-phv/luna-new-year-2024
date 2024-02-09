import { createContext } from "react";
import { IDice, IGamer, IGamerJoined, IPieces, IPrice } from "../model";
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
  listGamerJoined: IGamerJoined[];
}
export const GourdCrabShrimpFishContext =
  createContext<ISharedGourdCrabShrimpFish | null>(null);
