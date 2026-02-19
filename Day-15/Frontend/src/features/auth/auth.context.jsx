/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, } from "react";
import { login, register,} from "./services/auth.api";



export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);

    try {
      const response = await login(email, password);
      setUser(response.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (username, email, bio, password) => {
    setLoading(true);

    try {
      const response = await register(username,email,bio,password);
      setUser(response.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, handleLogin, handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
}
