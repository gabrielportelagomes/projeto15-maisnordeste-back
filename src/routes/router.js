import { Router } from "express";
import authRouter from "./auth.router.js";
import statesRouter from "./states.router.js";
import userRouter from "./user.router.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(statesRouter);

export default router;
