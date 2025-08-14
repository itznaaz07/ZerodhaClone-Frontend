import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = process.env.REACT_APP_API_URL || "http://localhost:3002";

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await axios.get(`${API}/check`, { withCredentials: true });
      if (res.data.success) setUser(res.data.user);
      else setUser(null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data) => {
    try {
      const res = await axios.post(`${API}/signup`, data, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token || "");
        window.location.href = process.env.REACT_APP_DASHBOARD_URL;
        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || err.message };
    }
  };

  const login = async (data) => {
    try {
      const res = await axios.post(`${API}/api/login`, data, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token || "");
        window.location.href = process.env.REACT_APP_DASHBOARD_URL;
        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || err.message };
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API}/logout`, {}, { withCredentials: true });
    } catch {}
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
