import apiClient from "./api";

const ProductService = {
  getProducts: async () => {
    try {
      const response = await apiClient.get("products");
      return response;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },
};

export default ProductService;
