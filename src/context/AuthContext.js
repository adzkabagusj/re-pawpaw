"use client";

import { createContext, useContext, useState } from "react";

// Mocking if a user logs in
const auth_data_present = {
  user_id: "user1",
  email: "email@gmail.com",
  password: "secret",
  foto: "/DefaultProfilePicture.png",
  username: "pawrent",
};

// Mocking no user logs in
const auth_data_null = undefined;

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth_data_null);

  // for profile page edit functionality
  const updateUser = (updatedData) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedData }));
  };

  // TO-DO: onSignup
  // TO-DO: onLogin
  // TO-DO: onLogout (the logout button is profile page)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: updateUser,

        // onSignup,
        // onLogin,
        // onLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
