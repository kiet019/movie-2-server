import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/movie-app");
    console.log("Đã kết nối tới MongoDB");
  } catch (error) {
    console.error("Lỗi kết nối tới MongoDB:", error);
  }
};

export default connectDB;
