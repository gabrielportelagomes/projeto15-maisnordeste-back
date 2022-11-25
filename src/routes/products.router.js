import { Router } from "express";
import { postProducts } from "../controllers/products.controller.js";
import { productsValidation } from "../middlewares/productsSchemaValidation.middleware.js";

const productsRouter = Router();
productsRouter.post("/products", productsValidation, postProducts);
export default productsRouter;
