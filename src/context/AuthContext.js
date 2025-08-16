import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = process.env.REACT_APP_API_URL || "http://localhost:3002";
  const DASH_API = process.env.REACT_APP_Dashboard_Url;

  // Call checkAuth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await axios.get(`${API}/api/check`, {
        withCredentials: true
      });
      if (res.data.success && res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Check auth failed:", err.response?.data?.message || err.message || err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const login = async (data) => {
    try {
      const res = await axios.post(`${API}/api/login`, data, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token || "");
        window.location.href = `${DASH_API}`;
        return { success: true };
      }
      return { success: false, message: res.data.message || "Login failed" };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || err.message };
    }
  };

  const signup = async (data) => {
    try {
      const res = await axios.post(`${API}/signup`, data, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token || "");
        window.location.href = `${DASH_API}`;
        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || err.message };
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API}/api/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
