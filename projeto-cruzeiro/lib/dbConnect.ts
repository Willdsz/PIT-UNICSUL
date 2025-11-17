import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("🟢 Conectado ao MongoDB!");
  } catch (error: any) {
    console.error("🔴 ERRO REAL DO MONGODB:", error.message);
    throw new Error(error.message);
  }
}

export default dbConnect;
