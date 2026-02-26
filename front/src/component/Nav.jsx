import React, { useContext, useState } from "react";
import logo from "../assets/vcart logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { userDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext.jsx";
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { shopDataContext } from "../context/ShopContext.jsx";

function Nav() {
  let navigate = useNavigate();
  const {showSearch, setShowSearch, search, setSearch,getCartCount} =
    useContext(shopDataContext);
  const [showProfile, setShowProfile] = useState(false);
  let { getCurrentUser, userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);

  const handleLogout = async () => {
    try {
      const result = axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      await getCurrentUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-17.5 bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-7.5 shadow-md shadow-black ">
      <div className="w-[20%] lg:w-[30%]flex items-center justify-start gap-2.5">
        <img src={logo} alt="" className="w-7.5" />
        <h1 className="text-[25px] text-[black] font-sans">OneCart</h1>
      </div>
      <div className="w-[50%] lg:w[40%]hidden md:flex">
        <ul className="flex items-center justify-center gap-4.75 text-[white]">
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-2xl"
            onClick={() => navigate("/")}
          >
            HOME
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-2xl"
            onClick={() => navigate("/collection")}
          >
            COLLECTIONS
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-2xl"
            onClick={() => navigate("/about")}
          >
            ABOUT
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-2xl"
            onClick={() => navigate("/contact")}
          >
            CONTACT US
          </li>
        </ul>
      </div>
      {/* ICON SECTION */}
      <div className="w-[30%] flex items-center justify-end gap-5 relative">
        {/* Search icon */}
        <FaSearch
          className="w-9 h-9 text-black cursor-pointer"
          onClick={() => {
            setShowSearch((prev) => !prev);
            navigate("/collection");
          }}
        />

        {/* User icon / avatar */}
        {!userData && (
          <FaRegUserCircle
            className="w-7 h-7 text-black cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        )}

        {userData && (
          <div
            className="w-7 h-7 bg-[#080808] text-white rounded-full flex items-center justify-center text-sm cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}

        {/* Cart icon + badge */}
        <div className="relative">
          <IoCart
            className="w-7 h-7 text-black cursor-pointer
          hidden md:block"
            onClick={() => navigate("/cart")}
          />
          <p className="absolute -top-1 -right-2 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[9px] hidden md:block">
            {getCartCount()}
          </p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div
        className={`
    w-full h-20 bg-[#d8f6f9dd]
    absolute top-full left-0 right-0
    flex items-center justify-center
    transition-all duration-300 ease-out
    ${
      showSearch
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }
  `}
      >
        <input
          type="text"
          autoFocus
          className="lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-full px-10 placeholder:text-white text-white text-[18px] outline-none"
          placeholder="Search Here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>

      {showProfile && (
        <div className="absolute w-55 h-37.5 bg-[#000000d7] top-[110%] right-[4%] border border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-full h-full flex items-start justify-around flex-col text-[17px] py-2.5 text-[white]">
            {!userData && (
              <li
                className="w-full hover:bg-[#2f2f2f] px-3.75 py-2.5 cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                LogIn
              </li>
            )}
            {userData && (
              <li
                className="w-full hover:bg-[#2f2f2f] px-3.75 py-2.5 cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
              >
                LogOut
              </li>
            )}
            <li className="w-full hover:bg-[#2f2f2f] px-3.75 py-2.5 cursor-pointer">
              Orders
            </li>
            <li
              className="w-full hover:bg-[#2f2f2f] px-3.75 py-2.5 cursor-pointer"
              onClick={() => {
                () => navigate("/about");
                setShowProfile(false);
              }}
            >
              About
            </li>
          </ul>
        </div>
      )}

      <div className="w-full h-22.5 flex items-center justify-between px-5 fixed bottom-0 left-0 bg-[#191818] md:hidden text-[12px]">
        <button
          className="text-white flex items-center flex-col gap-0.5 "
          onClick={() => navigate("/")}
        >
          <IoMdHome className="w-7 h-6.5 text-[white] md:hidden " />
          Home
        </button>

        <button
          className="text-white flex items-center flex-col gap-0.5 "
          onClick={() => navigate("/collection")}
        >
          <HiOutlineCollection className="w-7 h-6.5 text-[white] md:hidden " />
          Collections
        </button>

        <button
          className="text-white flex items-center flex-col gap-0.5 "
          onClick={() => navigate("/contact")}
        >
          <IoMdContact className="w-7 h-6.5 text-[white] md:hidden " />
          Contact
        </button>

        <button
          className="text-white flex items-center flex-col gap-0.5 "
          onClick={() => navigate("/cart")}
        >
          <IoCart className="w-7 h-6.5 text-white md:hidden cursor-pointer" />
          Cart
        </button>
        <p className="absolute w-4.5 h-4.5 flex items-center justify-center bg-white px-1.25 py-0.5 text-black font-semibold rounded-full text-[9px] top-2 right-4.5 ">
          {getCartCount()}
        </p>
      </div>
    </div>
  );
}

export default Nav;
