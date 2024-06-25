import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('prasthan_yatna_jwt');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('prasthan_yatna_jwt', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('prasthan_yatna_jwt');
    setIsLoggedIn(false);
  };

  const resetPassword = (newPassword) => {

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
