import mongoose from "mongoose";
import dotenv from "dotenv"
const dbuser = process.env.USER-DB
const dbpasword = process.env.DB-PASS

const main = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbuser}:${dbpasword}@cluster0.0fh3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Conectado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose