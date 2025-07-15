import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";
import {
  deleteSuggest,
  fetchSuggestions,
  postSuggest,
} from "../thunks/suggestThunk";

interface SuggestionState {
  suggestions: Product[];
  isLoading: boolean;
  error: string | null;
  isVisible: boolean;
}

const initialState: SuggestionState = {
  suggestions: [],
  isLoading: false,
  error: null,
  isVisible: false,
};

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
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
      })
      .addCase(postSuggest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        postSuggest.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.suggestions = action.payload;
        }
      )
      .addCase(postSuggest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteSuggest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        deleteSuggest.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.suggestions = action.payload;
        }
      )
      .addCase(deleteSuggest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setIsVisible } = suggestionSlice.actions;
export default suggestionSlice.reducer;
