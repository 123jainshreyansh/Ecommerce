import React, { useContext, useState } from "react";
import Nav from "../components/Nav.jsx";
import Sidebar from "../components/Sidebar.jsx";

import { authDataContext } from "../context/AuthContext.jsx";
import axios from "axios";

function Add() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [price, setPrice] = useState("");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  let { serverUrl } = useContext(authDataContext);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    // Validation: Check if at least one image is selected
    if (!image1 || !image2 || !image3 || !image4) {
      alert("Please upload all 4 images");
      return;
    }

    // Validation: Check if sizes are selected
    if (sizes.length === 0) {
      alert("Please select at least one size");
      return;
    }

    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", String(bestSeller));
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      let result = await axios.post(
        serverUrl + "/api/product/addproduct",
        formData,
        { withCredentials: true }
      );

      console.log(result.data);

      if (result.data) {
        alert("Product added successfully!");
        setName("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setBestSeller(false);
        setCategory("Men");
        setSubCategory("TopWear");
        setSizes([]);
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
      alert(
        "Error adding product: " + error.response?.data?.message ||
          error.message
      );
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-[#141414] to-[#0c2025] text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />

      {/* Right Content Area */}
      <div className="w-[82%] min-h-screen flex items-start justify-start absolute right-0">
        <form
          onSubmit={handleAddProduct}
          className="w-full md:w-[90%] min-h-screen mt-16 flex flex-col gap-8 py-16 px-8 md:px-16"
        >
          <div className="w-full h-12 text-[25px] md:text-[40px] text-white font-semibold">
            Add Product Page
          </div>

          <div className="w-[80%] h-32.5 flex items-start justify-center flex-col mt-4 gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Upload Images
            </p>
            <div className="w-full h-screen flex items-center justify-start ">
              <label
                htmlFor="image1"
                className="w-16.25 h-16.25 cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={
                    !image1
                      ? "https://plus.unsplash.com/premium_photo-1677093905912-a653c6301260?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      : URL.createObjectURL(image1)
                  }
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-2"
                />
                <input
                  type="file"
                  id="image1"
                  hidden
                  onChange={(e) => setImage1(e.target.files[0])}
                  required
                />
              </label>

              <label
                htmlFor="image2"
                className="w-16.25 h-16.25 cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={
                    !image2
                      ? "https://plus.unsplash.com/premium_photo-1677093905912-a653c6301260?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      : URL.createObjectURL(image2)
                  }
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-2"
                />
                <input
                  type="file"
                  id="image2"
                  hidden
                  onChange={(e) => setImage2(e.target.files[0])}
                />
              </label>

              <label
                htmlFor="image3"
                className="w-16.25 h-16.25 cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={
                    !image3
                      ? "https://plus.unsplash.com/premium_photo-1677093905912-a653c6301260?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      : URL.createObjectURL(image3)
                  }
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-2"
                />
                <input
                  type="file"
                  id="image3"
                  hidden
                  onChange={(e) => setImage3(e.target.files[0])}
                />
              </label>

              <label
                htmlFor="image4"
                className="w-16.25 h-16.25 cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={
                    !image4
                      ? "https://plus.unsplash.com/premium_photo-1677093905912-a653c6301260?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      : URL.createObjectURL(image4)
                  }
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-2"
                />
                <input
                  type="file"
                  id="image4"
                  hidden
                  onChange={(e) => setImage4(e.target.files[0])}
                />
              </label>
            </div>
          </div>

          <div className="w-[80%] h-full flex items-start justify-center flex-col gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold ">
              Product Name
            </p>
            <input
              type="text"
              placeholder="Type here"
              name=""
              id=""
              className="w-150 max-w-[98%] h-10 rounded-lg hover:border-[#46d1f7] border-2 cursor-pointer bg-slate-600 px-5 text-[18px] placeholder:text-[#ffffffc2]"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="w-[80%]  flex items-start justify-center flex-col gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold ">
              Product Description
            </p>
            <textarea
              type="text"
              placeholder="Type here"
              name=""
              id=""
              className="w-150 max-w-[98%] h-25 rounded-lg hover:border-[#46d1f7] border-2 py-2.5 cursor-pointer bg-slate-600 px-5 text-[18px] placeholder:text-[#ffffffc2]"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          <div className="w-[80%] flex items-center gap-2.5 flex-wrap">
            <div className="md:w-[30%] w-full flex items-start sm:justify-center flex-col gap-2.5">
              <p className="text-[20px] md:text-[25px] font-semibold w-full ">
                Product Category
              </p>
              <select
                name=""
                id=""
                className="bg-slate-600 w-[60%] px-2.5 py-1.75 rounded-lg hover:border-[#46d1f7] border-2 "
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">kids</option>
              </select>
            </div>

            <div className="md:w-[30%] w-full flex items-start sm:justify-center flex-col gap-2.5">
              <p className="text-[20px] md:text-[25px] font-semibold w-full ">
                Sub-Category
              </p>
              <select
                name=""
                id=""
                className="bg-slate-600 w-[60%] px-2.5 py-1.75 rounded-lg hover:border-[#46d1f7] border-2 "
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="TopWear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>
          </div>

          <div className="w-[80%] h-full flex items-start justify-center flex-col gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold ">
              Product Price
            </p>
            <input
              type="number"
              placeholder="₹ 2000"
              name=""
              id=""
              className="w-150 max-w-[98%] h-10 rounded-lg hover:border-[#46d1f7] border-2 cursor-pointer bg-slate-600 px-5 text-[18px] placeholder:text-[#ffffffc2]"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="w-[80%] h-220px md:h-25 flex items-start justify-center flex-col gap-2.5 py-2.5 md:py-0 ">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Size
            </p>
            <div className="flex items-center justify-start gap-3.75 flex-wrap">
              <div
                className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  sizes.includes("S")
                    ? "bg-green-400 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("S")
                      ? prev.filter((item) => item !== "S")
                      : [...prev, "S"]
                  )
                }
              >
                S
              </div>

              <div
                className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  sizes.includes("M")
                    ? "bg-green-400 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("M")
                      ? prev.filter((item) => item !== "M")
                      : [...prev, "M"]
                  )
                }
              >
                M
              </div>

              <div
                className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  sizes.includes("L")
                    ? "bg-green-400 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("L")
                      ? prev.filter((item) => item !== "L")
                      : [...prev, "L"]
                  )
                }
              >
                L
              </div>

              <div
                className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  sizes.includes("XL")
                    ? "bg-green-400 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XL")
                      ? prev.filter((item) => item !== "XL")
                      : [...prev, "XL"]
                  )
                }
              >
                XL
              </div>

              <div
                className={`px-5 py-1.75 rounded-lg bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  sizes.includes("XXL")
                    ? "bg-green-400 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XXL")
                      ? prev.filter((item) => item !== "XXL")
                      : [...prev, "XXL"]
                  )
                }
              >
                XXL
              </div>
            </div>
          </div>

          <div className="w-[80%] flex items-center justify-start gap-2.5 mt-5 bottom-[5%]">
            <input
              type="checkbox"
              id="checkbox"
              className="w-6.25 h-6.25 cursor-pointer"
              onChange={(e) => setBestSeller(e.target.checked)}
            />
            <label
              htmlFor="checkbox"
              className="text-[18px] md:text-[22px] font-semibold"
            >
              Add to BestSeller
            </label>
          </div>

          <button className="w-35 px-5 py-5 rounded-xl bg-[#65d8f7] flex items-center justify-center gap-2.5 text-black active:bg-slate-700 active:text-white active:border-2 border-white">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
