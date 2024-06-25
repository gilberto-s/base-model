import { HealthCheckPort } from "../../core/ports/HealthCheckPort";

export class HealthCheckService implements HealthCheckPort {
    async checkHealth(): Promise<{ status: string; details: any; }> {
        const isHealthy = true;
        return {
            status: isHealthy ? 'healthy' : 'unhealthy',
            details: {},
        }
    }
}
