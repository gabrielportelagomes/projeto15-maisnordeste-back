import { Router } from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);

export default router;
