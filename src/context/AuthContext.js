import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const API_BASE = process.env.REACT_APP_API_URL  || "http://localhost:3002/auth";


  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const res = await axios.get(`${API_BASE}/check`, { withCredentials: true });
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
      const res = await axios.post(`${API_BASE}/signup`, data, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.user);
        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Signup failed" };
    }
  };

  const login = async (data) => {
    try {
      const res = await axios.post(`${API_BASE}/login`, data, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.user);
        return { success: true };
      }
      return { success: false, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Login failed" };
    }
  };

  const logout = async () => {
    await axios.post(`${API_BASE}/logout`, {}, { withCredentials: true });
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout, checkAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
