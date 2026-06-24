import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    // optional options if needed
  });

  console.log("Database Connected");
};

export default connectDB;