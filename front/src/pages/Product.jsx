import React from "react";
import LatestCollection from "../component/LatestCollection.jsx";
import BestSeller from "../component/BestSeller.jsx";

function Product() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#141414] to-[#0c2025] flex items-center justify-start flex-col py-4">
      <div className="w-full min-h-17.5 flex items-center justify-center gap-2.5 flex-col">
        <LatestCollection />
      </div>

      <div className="w-full min-h-17.5 flex items-center justify-center gap-2.5 flex-col">
        <BestSeller />
      </div>
    </div>
  );
}

export default Product;
