export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: string[];
};

export type ProductState = {
  items: Product[];
  isLoading: boolean;
  error?: string;
};
