import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("MongoDB connection established successfully");
  } catch (error) {
    console.error("MongoDB connection error", error);
  }
};

export default connectDB;
