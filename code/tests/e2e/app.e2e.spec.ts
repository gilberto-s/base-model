import * as request from "supertest";
import { App } from "../../src/App";

const app = new App().server;

describe('App E2E', () => {
    it('should perform a health check', async () => {
      const res = await request(app).get('/health');
      expect(res.status).toBe(200);
    });
});
