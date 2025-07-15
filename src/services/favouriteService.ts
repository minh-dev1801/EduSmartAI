import axios from "axios";
import type { Product } from "../types/product";

const favouriteService = {
  getFavourite: async (userId: string) => {
    try {
      const response = await axios.get(
        `https://68763d54814c0dfa653b4034.mockapi.io/api/favourites?userId=${userId}`
      );
      return response;
    } catch (error) {
      console.error("Error get favourite data:", error);
      throw error;
    }
  },
  deleteFavourite: async (id: string) => {
    try {
      const response = await axios.delete(
        `https://68763d54814c0dfa653b4034.mockapi.io/api/favourites/${id}`
      );
      return response;
    } catch (error) {
      console.error("Error get favourite data:", error);
      throw error;
    }
  },
  postFavourite: async (data: Product, userId: string) => {
    try {
      const response = await axios.post(
        `https://68763d54814c0dfa653b4034.mockapi.io/api/favourites?userId=${userId}`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error post favourite data:", error);
      throw error;
    }
  },
};

export default favouriteService;
