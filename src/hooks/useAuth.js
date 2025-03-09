import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuth = () => {
  const { currentUser, login, register, logout, loading } = useContext(AuthContext);

  return { currentUser, login, register, logout, loading };
};

export default useAuth;
