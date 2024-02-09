import { IDice, IGamer, IPieces, IPrice } from "../model";

interface IGameState {
  listGamer: IGamer[];
  totalScore: number;
  listPieces: IPieces[];
  listPrice: IPrice[];
  listDiceResult: IDice[];
  rolling: boolean;
  currentPieces?: IPieces;
  currentGamer?: IGamer;
  gameDone: boolean;
}

const initState: IGameState = {
  totalScore: 1000,
  listPieces: [
    {
      id: 1,
      image: "./image/gourd-crab-shrimp-fish/face-1.png",
      piecesScore: 0,
      name: "Nai",
    },
    {
      id: 2,
      image: "./image/gourd-crab-shrimp-fish/face-2.png",
      piecesScore: 0,
      name: "Bầu",
    },
    {
      id: 3,
      image: "./image/gourd-crab-shrimp-fish/face-3.png",
      piecesScore: 0,
      name: "Gà",
    },
    {
      id: 4,
      image: "./image/gourd-crab-shrimp-fish/face-4.png",
      piecesScore: 0,
      name: "Cá",
    },
    {
      id: 5,
      image: "./image/gourd-crab-shrimp-fish/face-5.png",
      piecesScore: 0,
      name: "Cua",
    },
    {
      id: 6,
      image: "./image/gourd-crab-shrimp-fish/face-6.png",
      piecesScore: 0,
      name: "Tôm",
    },
  ],
  listDiceResult: [],
  rolling: false,
  currentPieces: undefined,
  currentGamer: undefined,
  listGamer: [],
  gameDone: false,
  listPrice: [
    {
      id: 1,
      name: "5 nghìn đồng",
      value: 5,
      image: "./image/gourd-crab-shrimp-fish/ic-5k.jpeg",
    },
    {
      id: 2,
      name: "10 nghìn đồng",
      value: 10,
      image: "./image/gourd-crab-shrimp-fish/ic-10k.jpeg",
    },
    {
      id: 3,
      name: "20 nghìn đồng",
      value: 20,
      image: "./image/gourd-crab-shrimp-fish/ic-20k.png",
    },
  ],
};

export type GameAction =
  | { type: "placeABet"; payload: { gamer: IGamer } }
  | { type: "choosePieces"; payload: { pieces: IPieces | undefined } }
  | { type: "gamerChoosed"; payload: { gamer: IGamer | undefined } }
  | { type: "play" }
  | { type: "playResult"; payload: { arrDice: IDice[] } }
  | { type: "reset" };

const reducer = (state: IGameState, action: GameAction): IGameState => {
  switch (action.type) {
    case "placeABet":
      const nextState: IGameState = JSON.parse(JSON.stringify(state));
      const { gamer } = action.payload;
      nextState.listGamer.push(gamer);
      nextState.currentGamer = undefined;
      nextState.currentPieces = undefined;
      return nextState;

    case "choosePieces": {
      const nextState: IGameState = JSON.parse(JSON.stringify(state));
      nextState.currentPieces = action.payload.pieces;
      return nextState;
    }
    case "gamerChoosed": {
      const nextState: IGameState = JSON.parse(JSON.stringify(state));
      nextState.currentGamer = action.payload.gamer;
      return nextState;
    }

    case "play": {
      const nextState: IGameState = JSON.parse(JSON.stringify(state));
      nextState.rolling = true;
      return nextState;
    }

    case "playResult": {
      const { arrDice } = action.payload;
      const nextState: IGameState = JSON.parse(JSON.stringify(state));
      nextState.rolling = false;
      nextState.listDiceResult = arrDice;
      nextState.gameDone = true;

      for (let i = 0; i < state.listGamer.length; i++) {
        const _gamer = state.listGamer[i];
        let numPieces = 0;

        for (let j = 0; j < arrDice.length; j++) {
          if (arrDice[j].id === _gamer.pieces?.id) {
            numPieces++;
          }
        }
        if (numPieces > 0) {
          const _newGamer: IGamer = {
            ..._gamer,
            totalPrice: _gamer.price! + _gamer.price! * numPieces,
          };
          nextState.listGamer[i] = _newGamer;
        }
      }

      return nextState;
    }

    case "reset": {
      const nextState: IGameState = JSON.parse(JSON.stringify(state));
      nextState.gameDone = false;
      nextState.listGamer = [];

      return nextState;
    }

    default:
      return state;
  }
};

export { reducer, initState };
