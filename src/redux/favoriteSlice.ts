import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";
import { AxiosError } from "axios";
import favouriteService from "../services/favouriteService";

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
  "favourite/fetch",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await favouriteService.getFavourite(userId);
      const data = response.data;

      return data;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

export const deleteFavourite = createAsyncThunk(
  "favourite/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const userId = "1";
      await favouriteService.deleteFavourite(id);

      const getResponse = await favouriteService.getFavourite(userId);
      const updatedFavouriteions: Product[] = getResponse.data;

      return updatedFavouriteions;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

export const postFavourite = createAsyncThunk(
  "favourite/post",
  async (data: Product, { rejectWithValue }) => {
    try {
      const userId = "1";

      const getResponse = await favouriteService.getFavourite(userId);
      const currentFavourite: Product[] = getResponse.data;

      const foundProduct = currentFavourite.find(
        (curPro) => curPro.name === data.name
      );
      if (!foundProduct) {
        const favouriteData = { ...data, userId };
        const postResponse = await favouriteService.postFavourite(
          favouriteData,
          userId
        );
        currentFavourite.push(postResponse.data);
      }

      return currentFavourite;
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

export const { setFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
