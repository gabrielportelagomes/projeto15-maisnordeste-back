import { Router } from "express";
import { postProductOnCart } from "../controllers/cart.controllers.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";
import { productCartSchemaValidation } from "../middlewares/productCartSchemaValidation.middleware.js";

const cartRouter = Router();

cartRouter.use(authRoutesValidation);

cartRouter.post("/cart", productCartSchemaValidation, postProductOnCart);

export default cartRouter;
