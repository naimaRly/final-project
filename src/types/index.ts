export interface Game {
  id: number;
  title: string;
  genre: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  platform: string[];
  releaseYear: number;
}

export interface CartItem {
  game: Game;
  quantity: number;
}