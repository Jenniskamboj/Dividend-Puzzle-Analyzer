/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("dividend_user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    const savedAccount = localStorage.getItem("dividend_account");

    if (savedAccount) {
      const account = JSON.parse(savedAccount);

      if (
        account.email === email &&
        account.password === password
      ) {
        const userData = {
          name: account.name,
          email: account.email,
          role: "user",
        };

        setUser(userData);

        sessionStorage.setItem(
          "dividend_user",
          JSON.stringify(userData)
        );

        return true;
      }
    }

    // Demo account
    if (
      email === "admin@dividendpuzzle.com" &&
      password === "admin123"
    ) {
      const userData = {
        name: "Admin",
        email: email,
        role: "admin",
      };

      setUser(userData);

      sessionStorage.setItem(
        "dividend_user",
        JSON.stringify(userData)
      );

      return true;
    }

    return false;
  };

  const signup = (name, email, password) => {
    const account = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "dividend_account",
      JSON.stringify(account)
    );

    const userData = {
      name,
      email,
      role: "user",
    };

    setUser(userData);

    sessionStorage.setItem(
      "dividend_user",
      JSON.stringify(userData)
    );

    return true;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("dividend_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}