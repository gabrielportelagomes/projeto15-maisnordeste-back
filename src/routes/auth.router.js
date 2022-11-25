import { Router } from "express";
import { signInValidation } from "../middlewares/signInValidation.middleware.js";
import { postSignIn } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-in", signInValidation, postSignIn);

export default authRouter;
