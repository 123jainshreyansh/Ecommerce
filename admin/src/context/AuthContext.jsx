import React, { createContext, useState } from "react";

export const authDataContext = createContext();
function AuthContext({ children }) {
  const serverUrl = "http://localhost:8000";
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");

  const value = {
    serverUrl,
    isAdmin,
    setIsAdmin,
    adminEmail,
    setAdminEmail,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;
