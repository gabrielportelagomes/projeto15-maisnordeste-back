import { Router } from "express";
import {
  deleteCart,
  getProductsOnCart,
  postProductOnCart,
} from "../controllers/cart.controllers.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";
import { cartIdsSchemaValidation } from "../middlewares/cartIdsSchemaValidation.middleware.js";
import { productCartSchemaValidation } from "../middlewares/productCartSchemaValidation.middleware.js";

const cartRouter = Router();

cartRouter.use(authRoutesValidation);

cartRouter.post("/cart", productCartSchemaValidation, postProductOnCart);
cartRouter.get("/cart", getProductsOnCart);
cartRouter.delete("/cart", cartIdsSchemaValidation, deleteCart);

export default cartRouter;
