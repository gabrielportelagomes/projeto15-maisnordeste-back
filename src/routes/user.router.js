import { Router } from "express";
import { postSignUp } from "../controllers/user.controllers.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.middleware.js";

const userRouter = Router();

userRouter.post("/sign-up", userSchemaValidation, postSignUp);

export default userRouter;
