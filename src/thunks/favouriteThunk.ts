import { AxiosError } from "axios";
import favouriteService from "../services/favouriteService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../types/product";

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
