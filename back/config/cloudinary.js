import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import upload from "../middleware/multer.js";

const uploadOnCloudinary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    if (!filePath) {
      return null;
    }
    const uploadResult = await cloudinary.uploader.upload(filePath);
    // Only delete if file exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    return uploadResult.secure_url;
  } catch (error) {
    // Only delete if file exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    console.log("Cloudinary Upload Error:", error.message);
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};

export default uploadOnCloudinary;
