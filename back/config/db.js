import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // ✅ Prevent multiple connections in serverless
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
};

export default connectDB;
