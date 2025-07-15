import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";
import axios, { AxiosError } from "axios";

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

export const fetchFavourite = createAsyncThunk(
  "favourite/fetchFavourite",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://686e53dcc9090c495389338e.mockapi.io/api/suggestion?userId=${userId}`
      );

      const data = response.data;

      return data;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

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
    },
});

export const { setFavorite, clearFavorite, deleteFavourite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
