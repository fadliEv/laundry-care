import localStorage from "../utils/localStorage";
import apiClient from "./apiClient";

const authService = {
  login: async (username, password) => {
    try {
      const response = await apiClient({
        method: "post",
        url: "/auth/login",
        params: { username, password },
      });

      if (response.token) {
        await localStorage.setData("token", response.token);        
        return response.token;
      }                  
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  },

  logout: async () => {
    await localStorage.removeData("token");    
  },

  getCurrentUser: async () => {
    return await localStorage.getData("token");
  },
};

export default authService;
