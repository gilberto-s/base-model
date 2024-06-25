import * as express from "express";
import { HealthCheckController } from "../controllers/HealthCheck.controllers";
import { HealthCheckService } from "../../../core/services/HealthCheckService";

const router = express.Router();

const healthCheckService = new HealthCheckService();
const healthCheckController = new HealthCheckController(healthCheckService);

router.get('/health', healthCheckController.check.bind(healthCheckController));

export { router as healthCheckRoutes };