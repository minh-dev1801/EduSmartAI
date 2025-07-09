import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://686e53dcc9090c495389338e.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
