import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
    process.exit(1); //exit with failure
  }
};

export default connectDb;
