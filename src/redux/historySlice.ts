import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";

interface HistoryState {
  items: Product[];
}

const initialState: HistoryState = {
  items: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const foundProduct = state.items.find((item) => item.id === product.id);

      if (!foundProduct) {
        state.items = [...state.items, product];
      }
    },
    clearHistory: (state) => {
      state.items = [];
    },
  },
});

export const { setHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
