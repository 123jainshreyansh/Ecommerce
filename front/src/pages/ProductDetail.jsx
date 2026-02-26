import React, {useState, useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext.jsx'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct.jsx';


function ProductDetail() {
let {productId } = useParams()
let {products, currency, addtoCart}  = useContext(shopDataContext)
const [productData, setProductData] = useState();

const [image, setImage] = useState('');
const [image1, setImage1] = useState('');
const [image2, setImage2] = useState('');
const [image3, setImage3] = useState('');
const [image4, setImage4] = useState('');
const [size, setSize] = useState('');

const fetchProductData = async () => {
    products.map((item) => {
        if(item._id === productId){
            setProductData(item)
           // console.log(productData)
            setImage1(item.image1)
            setImage2(item.image2)
            setImage3(item.image3)
            setImage4(item.image4)
            setImage(item.image1)

            return null
        }
    })
}

useEffect(() => {
    fetchProductData()
},[productId, products])

  return productData ? (
    <div>
      <div className="w-[99vw] h-[130vh] md:h-screen bg-linear-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col lg:flex-row gap-5 ">
        <div className="lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-17.5 flex items-center justify-center md:gap-2.5 gap-7.5 flex-col-reverse lg:flex-row">
          <div className="lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-12.5 lg:gap-5 lg:flex-col flex-wrap">
            <div className="md:w-25 w-12.5 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md">
              <img
                src={image1}
                alt=""
                className="w-full h-full cursor-pointer rounded-md"
                onClick={() => setImage(image1)}
              />
            </div>

            <div className="md:w-25 w-12.5 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md">
              <img
                src={image2}
                alt=""
                className="w-full h-full cursor-pointer rounded-md"
                onClick={() => setImage(image2)}
              />
            </div>

            <div className="md:w-25 w-12.5 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md">
              <img
                src={image3}
                alt=""
                className="w-full h-full cursor-pointer rounded-md"
                onClick={() => setImage(image3)}
              />
            </div>

            <div className="md:w-25 w-12.5 h-12.5 md:h-27.5 bg-slate-300 border border-[#80808049] rounded-md">
              <img
                src={image4}
                alt=""
                className="w-full h-full cursor-pointer rounded-md"
                onClick={() => setImage(image4)}
              />
            </div>
          </div>
          <div className="lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border border-[#80808049] rounded-md overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full lg:h-full h-full text-[30px] text-white text-center rounded-md object-fill"
            />
          </div>
        </div>
        <div className="lg:w-[50vw] w-screen lg:h-[75vh] h-[40vh] lg:mt-20 flex items-start justify-start flex-col py-5 px-7.5 md:pb-5 md:pl-5 lg:pl-0 lg:px-0 lg:py-0 gap-2.5">
          <h1 className="text-[40px] font-semibold text-[aliceblue]">
            {productData.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-1">
            <FaStar className="text-[20px] fill-[#FFD700]" />

            <FaStar className="text-[20px] fill-[#FFD700]" />

            <FaStar className="text-[20px] fill-[#FFD700]" />

            <FaStar className="text-[20px] fill-[#FFD700]" />

            <FaStarHalf className="text-[20px] fill-[#FFD700]" />
            <p className="text-[18px] font-semibold pl-1.25 text-[white]">
              (126)
            </p>
          </div>
          <p className="text-[30px] font-semibold pl-1.25 text-[white] ">
            {currency} {productData.price}
          </p>

          <p className="w-[80%] md:w-[60%] text-[20px] font-semibold pl-1.25 text-[white]">
            {productData.description} Easy to wash, super comfortable, and
            designed for effortless style.
          </p>

          <div className="flex flex-col gap-2.5 my-2.5">
            <p className="text-[25px] font-semibold pl-1.25 text-[white]">
              Select Sizes
            </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-slate-300 rounded-md ${item === size ? "bg-black text-[#2f97f1] text-[20px]" : ""}`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-2.5 px-5 rounded-2xl mt-2.5 border border-[#80808049] text-white shadow-md shadow-black"
            onClick={()=>addtoCart(productData._id, size)}
            >
              Add To Cart
            </button>
          </div>
          <div className="w-[90%] h-px bg-slate-700"></div>
          <div className="w-[80%] text-[16px] text-white">
            <p>100% Original Product.</p>
            <p>Cash on delievery available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[70vh] bg-linear-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-x-hidden">
        <div className="flex px-5 mt-[22.5] lg:ml-20 ml-0 lg:mt-0">
          <p className="border px-5 py-3 text-sm text-white">Description</p>

          <p className="border px-5 py-3 text-sm text-white">Reviews (124
            )</p>
        </div>
        <div className='w-[80%] md:h-37.5 h-55 bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-2.5 md:px-7.5 lg:ml-25 ml-5'> 
            <p className='w-[95%] h-[90%] flex items-center justify-center'>Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this is a must-have essential for those who value both fashion and function.</p>
        </div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default ProductDetail