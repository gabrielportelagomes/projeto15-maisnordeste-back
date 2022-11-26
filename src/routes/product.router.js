import { Router } from "express";
import { getProduct } from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.get("/product/:idProduct", getProduct);

export default productRouter;
