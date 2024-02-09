export interface IPieces extends IDice {
  piecesScore: number;
  name: string;
}

export interface IDice {
  id: number;
  image: string;
}

export interface IGamer {
  // id: number;
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
