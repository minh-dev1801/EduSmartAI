import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import type { Product } from "../types/product";
import suggestService from "../services/suggestService";

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

export const fetchSuggestions = createAsyncThunk(
  "suggestion/fetchSuggestions",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await suggestService.getSuggest(userId);
      const data = response.data;

      return data;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

export const postSuggest = createAsyncThunk(
  "suggestion/postSuggest",
  async (data: Product[], { rejectWithValue }) => {
    try {
      const userId = "1";

      const getResponse = await suggestService.getSuggest(userId);
      const currentSuggestions: Product[] = getResponse.data;

      for (const product of data) {
        const foundProduct = currentSuggestions.find(
          (curPro) => curPro.name === product.name
        );
        if (!foundProduct) {
          const suggestData = { ...product, userId };
          const postResponse = await suggestService.postSuggest(
            suggestData,
            userId
          );
          currentSuggestions.push(postResponse.data);
        }
      }

      return currentSuggestions;
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error.message);
      return rejectWithValue("Lỗi không xác định");
    }
  }
);

export const deleteSuggest = createAsyncThunk(
  "suggestion/deleteSuggest",
  async (id: string, { rejectWithValue }) => {
    try {
      const userId = "1";
      await suggestService.deleteSuggest(id);

      const getResponse = await suggestService.getSuggest(userId);
      const updatedSuggestions: Product[] = getResponse.data;

      return updatedSuggestions;
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
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
      state.error = null;
    },
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

export const { clearSuggestions, setIsVisible } = suggestionSlice.actions;
export default suggestionSlice.reducer;
