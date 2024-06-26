import * as request from "supertest";
import { App } from "../../../../src/App";
import { HealthCheckController } from "../../../../src/adapters/http/controllers/HealthCheck.controllers";
import { HealthCheckService } from "../../../../src/core/services/HealthCheckService";

const app = new App().server;
const healthCheckService = new HealthCheckService();
const healthCheckController = new HealthCheckController(healthCheckService);

app.use('/health', healthCheckController.check);

describe('HealthCheckController Integration', () => {
    it('Should return healthy system status', async () => {
        const res = await request(app).get('/health');
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual({ message: 'ok' });
    });
})