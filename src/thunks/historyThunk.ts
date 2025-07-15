import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../types/product";
import historyService from "../services/historyService";
import { AxiosError } from "axios";

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
