import User from "../models/userModel";
import { users } from "../utils/dummies/users";

// Simulasi API Request (nanti bisa diganti fetch/axios ke backend)
const authService = {
  login: async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulasi delay API

    const userData = users.find((user) => user.email === email && user.password === password);
    return userData ? User.fromJson(userData) : null;
  },

  register: async (newUser) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const createdUser = { id: users.length + 1, ...newUser };
    users.push(User.fromJson(createdUser));
    return createdUser;
  },

  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  },
};

export default authService;
