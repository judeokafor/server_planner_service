import { Router } from "express";

import { ServerPlanning } from "../controllers";
import { RequestValidator } from "../middlewares";

import { Validators } from "../utils";
import { RouteID } from "../utils/validators";

const router = Router();

router.post(
	"/",
	Validators(RouteID.CalculateServerCapacity),
	RequestValidator,
	ServerPlanning
);

export default router;
