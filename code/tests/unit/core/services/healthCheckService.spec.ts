import { HealthCheckService } from "../../../../src/core/services/HealthCheckService";

const healthCheckService = new HealthCheckService();

const mockUnhealthyHealthyService:HealthCheckService = {
    checkHealth: jest.fn().mockReturnValue({ status: 'unhealthy', details: {} })
}

describe('HealthCheckService', () => {
    it('Should return healthy status', async () => {
        const status = await healthCheckService.checkHealth();
        expect(status).toEqual({ status: 'healthy', details: {} });
    });

    it('Should return unhealthy status', async () => {
        const status = await mockUnhealthyHealthyService.checkHealth();
        expect(status).toEqual({ status: 'unhealthy', details: {} });
    });
});
