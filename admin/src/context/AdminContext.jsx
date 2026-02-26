import React from "react";
import { useContext, createContext, useState } from "react";
import { authDataContext } from "./AuthContext.jsx";
import axios from "axios";
import { useEffect } from "react";

export const AdminDataContext = createContext();
function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);
  let { serverUrl } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/getadmin", {
        withCredentials: true,
      });

      setAdminData(result.data);
      console.log(result.data);
    } catch (error) {
      setAdminData(null);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);
  let value = {
    adminData,
    setAdminData,
    getAdmin,
  };

  return (
    <div>
      <AdminDataContext value={value}>{children}</AdminDataContext>
    </div>
  );
}

export default AdminContext;
