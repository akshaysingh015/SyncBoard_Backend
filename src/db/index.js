import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URL
      
    );
    console.log(`Mongo db connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1);
  }
};
export default connectDB;
