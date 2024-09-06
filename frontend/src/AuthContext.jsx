// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsAuthenticated(true);
      // You might want to make an API call here to get fresh admin data
      // For now, we'll just set it to true
    }
  }, []);

  const login = (token, adminData) => {
    Cookies.set('token', token, { expires: 1 }); // expires in 1 day
    setIsAuthenticated(true);
    setAdmin(adminData);
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);