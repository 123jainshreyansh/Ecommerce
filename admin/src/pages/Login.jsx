import React, { useState, useContext } from "react";
import logo from "../assets/vcart logo.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { AdminDataContext } from "../context/AdminContext";

function Login() {
  const [show, setshow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [loading, setLoading] = useState(false);
  let { serverUrl, setIsAdmin, setAdminEmail } = useContext(authDataContext);
  let {adminData, getAdmin} = useContext(AdminDataContext)
  const navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      );

      // Log admin data to console
      console.log("Admin Login Successful!");
      console.log("Token:", result.data.token);
      console.log("Email:", result.data.email);
      console.log("Role:", result.data.role);
      console.log("Full Admin Data:", result.data);

      // Set admin authentication state
      setIsAdmin(true);
      setAdminEmail(result.data.email);
      getAdmin()
      // Redirect to home page
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      setErrorMsg(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      {/* Navbar */}
      <div className="w-full h-20 flex items-center justify-start px-8 gap-3 cursor-pointer">
        <img className="w-10" src={logo} alt="logo" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      <div className="w-full h-25 flex items-center justify-center flex-col gap-2.5">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to Onecart, Apply to Admin Login{" "}
        </span>
      </div>

      <div className="max-w-150 w-[90%] h-100 bg-[#00000025] border border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center  ">
        <form
          action=""
          onSubmit={AdminLogin}
          className="w-[90%]  h-[90%] flex flex-col items-center justify-start gap-5"
        >
          <div className="w-[90%] h-100 flex flex-col items-center justify-center gap-3.75 relative ">
            <input
              type="text"
              name=""
              id=""
              className="w-full h-50% border-2  border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transperent placeholder-[#ffffffc7] px-5 font-semibold "
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type={show ? "text" : "password"}
              name=""
              id=""
              className="w-full h-50% border-2  border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transperent placeholder-[#ffffffc7] px-5 font-semibold "
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show && (
              <IoEyeOutline
                className="w-5 h-5 cursor-pointer absolute right-[5%] top-29 mt-7.5"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEyeSharp
                className="w-5 h-5 cursor-pointer absolute right-[5%] top-29 mt-7.5"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            <button
              disabled={loading}
              className="w-full h-12.5 bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {errorMsg && (
              <div className="w-full bg-red-500 text-white p-3 rounded-lg text-center text-sm">
                {errorMsg}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
