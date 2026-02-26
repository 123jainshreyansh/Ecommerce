import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
       email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        // required: [true, "Password is required"],
        // minlength: [8, "Password must be at least 8 character long"]
      },
      cartData:{
        type: Object,
        default: {}
      }
}, {
    timestamps: true,
    minimize: false
}) 

const User = mongoose.model("User", UserSchema)

export default User