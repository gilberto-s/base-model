export interface HealthCheckPort {
    checkHealth(): Promise<{ status: string; details: any }>;
}
