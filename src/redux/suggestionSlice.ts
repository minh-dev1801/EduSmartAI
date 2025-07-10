import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { Product } from "../types/product";

interface SuggestionState {
  suggestions: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SuggestionState = {
  suggestions: [],
  isLoading: false,
  error: null,
};

export const fetchSuggestions = createAsyncThunk(
  "suggestion/fetchSuggestions",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://686e53dcc9090c495389338e.mockapi.io/api/suggestion?userId=${userId}`
      );

      const data = response.data;

      console.log({ data });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {
    clearSuggestions: (state) => {
      state.suggestions = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchSuggestions.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.suggestions = action.payload;
        }
      )
      .addCase(fetchSuggestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSuggestions } = suggestionSlice.actions;
export default suggestionSlice.reducer;
