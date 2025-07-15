import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";
import historyService from "../services/historyService";
import { AxiosError } from "axios";

interface HistoryState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HistoryState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchHistory = createAsyncThunk(
  "history/fetchHistory",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await historyService.getHistory(userId);
      const data = response.data;

      return data;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

export const postHistory = createAsyncThunk(
  "history/postHistory",
  async (data: Product, { rejectWithValue }) => {
    try {
      const userId = "1";

      const getResponse = await historyService.getHistory(userId);
      const currentHistory: Product[] = getResponse.data;

      const foundProduct = currentHistory.find(
        (curPro) => curPro.name === data.name
      );
      if (!foundProduct) {
        const historyData = { ...data, userId };
        const postResponse = await historyService.postHistory(
          historyData,
          userId
        );
        currentHistory.push(postResponse.data);
      }

      return currentHistory;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchHistory.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(postHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        postHistory.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(postHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
