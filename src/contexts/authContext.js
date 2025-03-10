import React, { createContext, useState, useContext } from "react";
import authService from "../services/authService";




export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false); // Untuk handle loading saat request ke API

  const login = async (email, password) => {
    setLoading(true);
    const user = await authService.login(email, password);
    setLoading(false);

    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const register = async (newUser) => {
    setLoading(true);
    const user = await authService.register(newUser);
    setLoading(false);

    return user ? true : false;
  };

  const logout = async () => {
    setLoading(true);
    await authService.logout();
    setLoading(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
