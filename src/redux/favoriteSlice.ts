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
      const arrProducts = [];
      if (action.payload) {
        arrProducts.push(action.payload);
      }
      state.items = [...arrProducts];
    },
    clearFavorite: (state) => {
      state.items = [];
    },
  },
});

export const { setFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
