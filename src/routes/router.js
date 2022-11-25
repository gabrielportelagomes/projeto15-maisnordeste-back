import { Router } from "express";
import authRouter from "./auth.router.js";
import statesRouter from "./states.router.js";
import userRouter from "./user.router.js";
import productsRouter from "./products.router.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(productsRouter);
router.use(statesRouter);

export default router;
