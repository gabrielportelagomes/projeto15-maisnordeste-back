import { Router } from "express";
import {
  getProductsOnCart,
  postProductOnCart,
  putProductsOnCart,
  deleteProductOnCart,
} from "../controllers/cart.controllers.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";
import { productCartSchemaValidation } from "../middlewares/productCartSchemaValidation.middleware.js";
import { productOnCartUpdateValidation } from "../middlewares/productOnCartUpdateValidation.middleware.js";
import { productOnCartUpdateAuthorization } from "../middlewares/productOnCartUpdateAuthorization.middleware.js";

const cartRouter = Router();

cartRouter.use(authRoutesValidation);

cartRouter.post("/cart", productCartSchemaValidation, postProductOnCart);
cartRouter.get("/cart", getProductsOnCart);
cartRouter.put(
  "/cart/:id",
  productOnCartUpdateValidation,
  productOnCartUpdateAuthorization,
  putProductsOnCart
);
cartRouter.delete(
  "/cart/:id",
  productOnCartUpdateAuthorization,
  deleteProductOnCart
);

export default cartRouter;
