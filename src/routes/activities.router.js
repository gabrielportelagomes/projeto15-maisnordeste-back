import { Router } from "express";
import { getActivities } from "../controllers/activities.controller.js";

const activitiesRouter = Router();

activitiesRouter.get("/activities", getActivities);

export default activitiesRouter;
