export interface NavItems {
  label: string;
  link: string;
}

export interface FlashSalesData {
  _id: string;
  name: string;
  price: string;
  previousPrice: string;
  description: string;
  flashSale: boolean;
  img: string;
  discount: string;
  category: string;
}

export interface Products {
  _id: string;
  name: string;
  price: string;
  previousPrice: string;
  description: string;
  flashSale: boolean;
  img: string;
  discount: string;
  category: string;
  rating: number;
}
