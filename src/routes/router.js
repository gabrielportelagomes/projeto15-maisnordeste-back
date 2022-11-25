import { Router } from "express";
import authRouter from "./auth.router.js";
import statesRouter from "./states.router.js";
import usersRouter from "./users.router.js";
import productsRouter from "./products.router.js";

const router = Router();

router.use(usersRouter);
router.use(authRouter);
router.use(productsRouter);
router.use(statesRouter);

export default router;
