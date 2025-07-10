import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PriceFilterState {
  selectedRange: string | null;
}

const initialState: PriceFilterState = {
  selectedRange: null,
};

const priceSlice = createSlice({
  name: "priceFilter",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<string | null>) => {
      state.selectedRange = action.payload;
    },
    clearPriceRange: (state) => {
      state.selectedRange = null;
    },
  },
});

export const { setPriceRange, clearPriceRange } = priceSlice.actions;
export default priceSlice.reducer;
