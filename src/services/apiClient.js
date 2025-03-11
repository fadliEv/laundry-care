import axios from "axios";
import localStorage from "../utils/localStorage";

const client = axios.create({
  baseURL: "http://192.168.1.19:8085", // Sesuaikan ip device dan port backend
});

// Interceptor untuk menambahkan token ke setiap request
client.interceptors.request.use(async (config) => {
  try {
    if (config.url !== "/auth/login") {
      const token = await localStorage.getData("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (error) {
    console.error("Interceptor Error:", error);
  }
  return config;
});

const apiClient = async ({ url, method, params = null }) => {
  try {
    const response = await client[method](url, params);
    return response.data;
  } catch (error) {
    console.error("API Client Error:", error.response?.data || error.message);
    throw error;
  }
};

export default apiClient;
