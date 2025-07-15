import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import type { Product } from "../types/product";
import suggestService from "../services/suggestService";

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
