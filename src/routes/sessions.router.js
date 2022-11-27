import { Router } from "express";
import { deleteSession } from "../controllers/sessions.controller.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";

const sessionsRouter = Router();

sessionsRouter.delete("/sessions", authRoutesValidation, deleteSession);

export default sessionsRouter;
