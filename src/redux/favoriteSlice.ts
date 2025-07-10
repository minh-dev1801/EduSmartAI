import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";

interface FavoriteState {
  items: Product[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const findedProduct = state.items.find((item) => item.id === product.id);

      if (!findedProduct) {
        state.items = [...state.items, product];
      }
    },
    deleteFavourite: (state, action: PayloadAction<Product>) => {
      const deletedProduct = action.payload;

      state.items = state.items.filter((item) => item.id !== deletedProduct.id);
    },
    clearFavorite: (state) => {
      state.items = [];
    },
  },
});

export const { setFavorite, clearFavorite, deleteFavourite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
