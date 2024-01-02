import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected", error);
  }
};

export default Connection;
