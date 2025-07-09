import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../services/productService";
import { AxiosError } from "axios";
import type { Product } from "../types/product";

export const fetchProduct = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("product/fetchProduct", async (_, { rejectWithValue }) => {
  try {
    const response = await ProductService.getProducts();
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return rejectWithValue(error.message);
    return rejectWithValue("Lỗi không xác định");
  }
});
