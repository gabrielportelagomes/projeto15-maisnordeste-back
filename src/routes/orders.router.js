import { Router } from "express";
import { getOrders, postOrder } from "../controllers/orders.controllers.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";
import { orderSchemaValidation } from "../middlewares/orderSchemaValidation.js";

const ordersRouter = Router();

ordersRouter.use(authRoutesValidation);

ordersRouter.post("/orders", orderSchemaValidation, postOrder);
ordersRouter.get("/orders", getOrders);

export default ordersRouter;
