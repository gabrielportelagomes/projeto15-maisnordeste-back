import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
  await mongoClient.connect();
  console.log("MongoDb Conectado");
} catch (err) {
  console.log("Erro ao conectar com o MongoDb: ", err.message);
}

db = mongoClient.db("maisNordeste");
