import { Router } from "express";
import {
  postSignUp,
  getUserEmail,
  getUser,
} from "../controllers/users.controllers.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.middleware.js";
import { emailSchemaValidation } from "../middlewares/emailSchemaValidation.middleware.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";

const userRouter = Router();

userRouter.post("/sign-up", userSchemaValidation, postSignUp);
userRouter.get("/users/:email", emailSchemaValidation, getUserEmail);
userRouter.get("/users", authRoutesValidation, getUser);

export default userRouter;
