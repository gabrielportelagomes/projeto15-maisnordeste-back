import { Router } from "express";
import authRouter from "./auth.router.js";
import statesRouter from "./states.router.js";
import usersRouter from "./users.router.js";
import productsRouter from "./products.router.js";
import activitiesRouter from "./activities.router.js";
import productRouter from "./product.router.js";
import cartRouter from "./cart.router.js";
import sessionsRouter from "./sessions.router.js";
import ordersRouter from "./orders.router.js";

const router = Router();

router.use(usersRouter);
router.use(authRouter);
router.use(productsRouter);
router.use(statesRouter);
router.use(activitiesRouter);
router.use(productRouter);
router.use(cartRouter);
router.use(sessionsRouter);
router.use(ordersRouter);

export default router;
