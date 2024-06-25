import { Request, Response } from "express";
import { HealthCheckService } from "../../../core/services/HealthCheckService";

export class HealthCheckController {
    constructor(private healthCheckService: HealthCheckService) {}

    async check(req:Request, res:Response): Promise<Response> {
        try {
            const healthStatus = await this.healthCheckService.checkHealth();
            const statusCode = healthStatus.status === "healthy" ? 200 : 503;
            return res.status(statusCode).send({ message: "ok" });
        } catch (error: any) {
            return res.status(500).send({ status: "unhealthy", error: error.message });
        }
    }
}
