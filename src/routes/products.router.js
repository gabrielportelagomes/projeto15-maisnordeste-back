import { Router } from "express";
import {
  getProducts,
  postProducts,
} from "../controllers/products.controllers.js";
import { productsValidation } from "../middlewares/productsSchemaValidation.middleware.js";
import { stateValidation } from "../middlewares/stateSchemaValidation.middleware.js";

const productsRouter = Router();
productsRouter.post("/products", productsValidation, postProducts);
productsRouter.get("/products/:state", stateValidation, getProducts);
export default productsRouter;
