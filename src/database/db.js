import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDb Conectado");
} catch (err) {
  console.log("Erro ao conectar com o MongoDb: ", err.message);
}

const db = mongoClient.db("maisNordeste");
export default db;
