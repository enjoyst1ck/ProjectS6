import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const userRegister = async(formData) => {
    console.log(formData)
    const res = await axios.post("http://localhost:7004/Account/register", {
      "username": formData.username,
      "email": formData.email,
      "phoneNumber": formData.phoneNumber,
      "password": formData.password
    });
    setCurrentUser(res.data);
  }

  const login = async (formData) => {
    const res = await axios.post("http://localhost:7004/Account/login", {
      email: formData.email,
      password: formData.password,
    });
    setCurrentUser(res.data);
  };

  const logout = (formData) => {
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, userRegister, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
