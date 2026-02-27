import express from "express";
import dotenv from "dotenv";
import connectDB from "../back/config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "../back/routes/authRoutes.js";
import userRoutes from "../back/routes/userRoutes.js";
import productRoutes from "../back/routes/productRoutes.js";
import cartRoutes from "../back/routes/cartRoutes.js";
import cors from "cors";
import serverless from "serverless-http";

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: true, // allow all in production (simpler for now)
    credentials: true,
  }),
);

// ✅ Connect DB (no app.listen here)
connectDB().catch((err) => {
  console.error("DB connection failed:", err);
});

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);

// ✅ Export serverless handler
export default serverless(app);
