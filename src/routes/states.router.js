import { Router } from "express";
import { getStates } from "../controllers/states.controller.js";

const statesRouter = Router();

statesRouter.get("/states", getStates);

export default statesRouter;
