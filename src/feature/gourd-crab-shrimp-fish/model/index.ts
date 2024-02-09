export interface IPieces extends IDice {
  piecesScore: number;
  name: string;
}

export interface IDice {
  id: number;
  image: string;
}

export interface IGamerJoined {
  id: string;
  name: string;
  totalPrice: number;
  numTurns: number;
}

export interface IGamer {
  id: string;
  name?: string;
  dateBet?: string;
  pieces?: IPieces;
  price?: number;
  totalPrice?: number;
}

export interface IPrice {
  id: number;
  name: string;
  image: string;
  value: number;
}
