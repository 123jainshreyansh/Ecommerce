import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // ✅ Validate required fields FIRST
    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !subCategory ||
      !sizes
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // ✅ Safely access uploaded files
    const image1File = req.files?.image1?.[0];
    const image2File = req.files?.image2?.[0];
    const image3File = req.files?.image3?.[0];
    const image4File = req.files?.image4?.[0];

    // ✅ Check if all images are uploaded
    if (!image1File || !image2File || !image3File || !image4File) {
      return res.status(400).json({
        message: "All 4 images are required",
      });
    }

    // ✅ Upload images to Cloudinary
    const image1 = await uploadOnCloudinary(image1File.path);
    const image2 = await uploadOnCloudinary(image2File.path);
    const image3 = await uploadOnCloudinary(image3File.path);
    const image4 = await uploadOnCloudinary(image4File.path);

    // ✅ Check if all images uploaded successfully
    if (!image1 || !image2 || !image3 || !image4) {
      return res.status(500).json({
        message: "Image upload failed, please try again",
      });
    }

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: typeof sizes === "string" ? JSON.parse(sizes) : sizes,
      bestSeller:
        typeof bestseller === "string"
          ? bestseller === "true"
          : Boolean(bestseller),
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);

    return res.status(201).json(product);
  } catch (error) {
    console.error("AddProduct Error:", error.message);
    return res.status(500).json({
      message: "AddProduct error",
      error: error.message,
    });
  }
};


export const listProduct = async(req, res) => {

    try {
        const product = await Product.find({})
        return res.status(200).json(product)
    } catch (error) {
        console.log("ListProduct Error")
        return res.status(500).json({message:`ListProduct Error ${error}`})
    }
} 

export const removeProduct = async(req,res) => {
    try {
        let {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json(product)
    } catch (error) {
        console.log("RemoveProduct Error")
        return res.status(500).json({message:`RemoveProductError ${error}`})
        
    }
}