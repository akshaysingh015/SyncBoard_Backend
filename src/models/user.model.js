import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password must be required"],
    },
    refreshToken: {
      type: String
    }
  },
  { timestamps: true }
); 



export const User = mongoose.model("User", userSchema);
