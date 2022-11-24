import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { postSignIn } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-in", authValidation, postSignIn);

export default authRouter;
