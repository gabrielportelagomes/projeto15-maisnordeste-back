import { Router } from "express";
import {
  getProduct,
  getProducts,
  postProducts,
} from "../controllers/products.controllers.js";
import { productsValidation } from "../middlewares/productsSchemaValidation.middleware.js";
import { stateValidation } from "../middlewares/stateSchemaValidation.middleware.js";

const productsRouter = Router();

productsRouter.post("/products", productsValidation, postProducts);
productsRouter.get("/products/:state", stateValidation, getProducts);
productsRouter.get("/produtcts/:idProduct", getProduct);

export default productsRouter;
