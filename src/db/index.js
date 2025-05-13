import mongoose from "mongoose";
import { DB_Name } from "../constant.js";
config();


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log(`Mongo db connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1);
  }
};
export default connectDB;
