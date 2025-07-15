import type { Product } from "../types/product";
import apiClient from "./api";

const suggestService = {
  getSuggest: async (userId: string) => {
    try {
      const response = await apiClient.get(`suggestion?userId=${userId}`);
      return response;
    } catch (error) {
      console.error("Error get suggest data:", error);
      throw error;
    }
  },
  deleteSuggest: async (id: string) => {
    try {
      const response = await apiClient.delete(`suggestion/${id}`);
      return response;
    } catch (error) {
      console.error("Error get suggest data:", error);
      throw error;
    }
  },
  postSuggest: async (data: Product, userId: string) => {
    try {
      const response = await apiClient.post(
        `suggestion?userId=${userId}`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error post suggest data:", error);
      throw error;
    }
  },
};

export default suggestService;
