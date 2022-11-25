import { Router } from "express";
import { postSignUp, getUserEmail } from "../controllers/users.controllers.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.middleware.js";
import { emailSchemaValidation } from "../middlewares/emailSchemaValidation.middleware.js";

const userRouter = Router();

userRouter.post("/sign-up", userSchemaValidation, postSignUp);
userRouter.get("/users/:email", emailSchemaValidation, getUserEmail);

export default userRouter;
