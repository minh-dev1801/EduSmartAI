import axios from "axios";
import type { Product } from "../types/product";

const historyService = {
  getHistory: async (userId: string) => {
    try {
      const response = await axios.get(
        `https://68763d54814c0dfa653b4034.mockapi.io/api/histories?userId=${userId}`
      );
      return response;
    } catch (error) {
      console.error("Error get history data:", error);
      throw error;
    }
  },
  postHistory: async (data: Product, userId: string) => {
    try {
      const response = await axios.post(
        `https://68763d54814c0dfa653b4034.mockapi.io/api/histories?userId=${userId}`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error post history data:", error);
      throw error;
    }
  },
};

export default historyService;
