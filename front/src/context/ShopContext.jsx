import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { authDataContext } from "./AuthContext.jsx";
import axios from "axios";
import { userDataContext } from "./UserContext.jsx";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [loading, setLoading] = useState(false);


  let{userData} = useContext(userDataContext)

  const { serverUrl } = useContext(authDataContext);

  const currency = "₹";
  const delivery_fee = 40;

  const getProducts = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/product/list");
      setProducts(result.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

 const addtoCart = async (itemId, size) => {
   if (!size) {
     console.log("Select Product Size");
     return;
   }

   // safer clone
   let cartData = JSON.parse(JSON.stringify(cartItem));

   if (cartData[itemId]) {
     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
   } else {
     cartData[itemId] = { [size]: 1 };
   }

   setCartItem(cartData);

   if (userData) {
     try {
       const result = await axios.post(
         serverUrl + "/api/cart/add",
         { itemId, size },
         { withCredentials: true },
       );

       console.log("Cart synced:", result.data);
     } catch (error) {
       console.log("Cart API error:", error.message);
     }
   } else {
     console.log("User not logged in. Cart updated locally only");
   }
 };


const getUserCart = async() => {
  try {
    const result = await axios.post(serverUrl + '/api/cart/get',{},{withCredentials:true})

    setCartItem(result.data)
  } catch (error) {
    console.log(error)
    toast.error(error.message)
    
  }
}

const UpdateQuantity = async(itemId,size,quantity) =>{
  let cartData = structuredClone(cartItem);
  cartData[itemId][size]= quantity
  setCartItem(cartData)

 if(userData){
  try {
    await axios.post(serverUrl + '/api/cart/update', {itemId, size, quantity}, {withCredentials: true})
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
 }
}





  const getCartCount = () =>{
    let totalCount = 0;
    for(const items in cartItem){
      for(const item in cartItem[items]){
        try{
          if(cartItem[items][item] > 0){
            totalCount += cartItem[items][item]
          }
        } catch(error){

        }
      }
    }
 return totalCount
  }

  const getCartAmount = async() =>{
    let totalAmount = 0;
    for(const items in cartItem){
      let itemInfo = products.find((product) => product._id === items);
      for(const item in cartItem[items]){
        try{
          if(cartItem[items][item] > 0){
            totalAmount += itemInfo.price * cartItem[items][item]
          }
        }
        catch(error){

        }
      }
    }
    return totalAmount
  }

  useEffect(() => {
    if (serverUrl) {
      getProducts();
    }
  }, [serverUrl]);

  useEffect(()=>{
    getUserCart()
  },[])

  const value = useMemo(
    () => ({
      products,
      currency,
      delivery_fee,
      getProducts,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      setCartItem,
      addtoCart,
      cartItem,
      getCartCount,
      UpdateQuantity,
      getCartAmount,
    }),
    [products, search, showSearch],
  );

  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
}

export default ShopContext;
