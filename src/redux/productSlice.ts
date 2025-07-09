import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../thunks/productThunk";
import type { ProductState } from "../types/product";

const initialState: ProductState = {
  items: [],
  isLoading: false,
  error: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state) => {
      state.items = [];
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
