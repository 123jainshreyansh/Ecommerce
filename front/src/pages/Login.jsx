import React from "react";
import logo from "../../src/assets/vcart logo.png";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/Firebase.js";

function Login() {
  const [show, setshow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let { getCurrentUser } = useContext(userDataContext);

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      await getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      await getCurrentUser();
      navigate("/");
    } catch (error) {
      console.error(
        error.response?.data?.message ||
          "Something went wrong when signup with google"
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      {/* Navbar */}
      <div
        className="w-full h-20 flex items-center justify-start px-8 gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-10" src={logo} alt="logo" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      <div className="w-full h-25 flex items-center justify-center flex-col gap-2.5">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to Onecart, Please place your order{" "}
        </span>
      </div>

      <div className="max-w-150 w-[90%] h-125 bg-[#00000025] border border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center  ">
        <form
          onSubmit={handleLogin}
          action=""
          className="w-[90%]  h-[90%] flex flex-col items-center justify-start gap-5"
        >
          <div
            className="w-[90%] h-12.5 bg-[#42656cae] rounded-lg flex items-center justify-center gap-2.5 py-5 cursor-pointer"
            onClick={googlelogin}
          >
            <img
              className="w-5"
              src="https://tse4.mm.bing.net/th/id/OIP.aoNGSVIqKHtM-NWf3QrvdwHaHa?pid=Api&P=0&h=180"
              alt=""
            />
            Login account with google
          </div>
          <div className="w-full h-5 flex items-center justify-center gap-2.5">
            <div className="w-[40%] h-px bg-[#96969635]"></div> Or{" "}
            <div className="w-[40%] h-px bg-[#96969635]"></div>
          </div>
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
                className="w-5 h-5 cursor-pointer absolute right-[5%] top-29"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEyeSharp
                className="w-5 h-5 cursor-pointer absolute right-[5%] top-29"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            <button className="w-full h-12.5 bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold cursor-pointer ">
              Login{" "}
            </button>

            <p className="flex gap-2.5">
              You have not any account?{" "}
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Create New Account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
