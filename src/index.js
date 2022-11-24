import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js"

const app = express();

dotenv.config();
app.use(cors());
app.use(json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
