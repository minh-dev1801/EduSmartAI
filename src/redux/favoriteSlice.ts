import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";
import {
  deleteFavourite,
  fetchFavourite,
  postFavourite,
} from "../thunks/favouriteThunk";

interface FavoriteState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FavoriteState = {
  items: [],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavourite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchFavourite.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchFavourite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(postFavourite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        postFavourite.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(postFavourite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteFavourite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        deleteFavourite.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(deleteFavourite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
