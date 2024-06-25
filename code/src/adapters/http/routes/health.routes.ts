import * as express from "express";
import { HealthController } from "../controllers/Health.controllers";

const router = express.Router();

const healthController = new HealthController();

router.get('/health', healthController.checkStatus);

export { router as healthRoutes };