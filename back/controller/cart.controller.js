import User from '../model/user.model.js';


export const addToCart = async(req, res) =>{
    try {
        const {itemId, size} = req.body;

        const userData = await UserActivation.findById(req.userId);

        if(!userData){
            return res.status(400).json({message: "User not found"})
        }

        let cartData = userData.cartData || {}

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }

        await User.findbyIdAndUpdate(req.userId, {cartData});

        return res.status(201).json({message: "Added to cart"})
    } catch (error) {
        console.log("AddtoCart Error: ",error.message)
    }
}

export const UpdateCart = async(req, res) =>{
    try {
        const {itemId, size, quantity} = req.body
        const userData = await User.findById(req.userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await User.findbyIdAndUpdate(req.userId,{cartData})
        return res.status(201).json({message: "Cart Updated"})
     } catch (error) {
        console.log("Update Cart error", error.message)
        return res.status(500).json({message: "updateCart Error"})
    }
}

export const getUserCart = async(req, res) =>{
    try {
        const userData = await User.findById(req.userId)
        let cartData = await userData.cartData;

        return res.status(200).json(cartData)
    } catch (error) {
        console.log("Get User Cart Error:",error.message);
        return res.status(500).json({message:"getUser Cart error"})
    }
}