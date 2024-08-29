export interface IProduct {
  productId: string;
  name: string;
  price: IPrice;
  rating: number;
}

export interface IPrice {
  oldPrice?: number;
  newPrice: number;
}
