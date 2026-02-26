import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    let navigate = useNavigate()
  return (
    <div className="w-[10%] min-h-screen border-r py-15 fixed left-0 top-0">
      <div className="flex flex-col gap-4 pt-10 pl-[20%] text-[15px]">
        <div
          className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
          onClick={() => navigate("/add")}
        >
          <IoMdAdd className="w-5 h-5" />
          <p className="hidden md:block">Add items</p>
        </div>

        <div
          className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
          onClick={() => navigate("/lists")}
        >
          <IoList className="w-5 h-5" />
          <p className="hidden md:block">List Items</p>
        </div>

        <div
          className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
          onClick={() => navigate("/orders")}
        >
          <TiTick className="w-5 h-5" />
          <p className="hidden md:block">View Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar