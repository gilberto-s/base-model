import * as express from "express";
import { healthCheckRoutes } from "./healthCheck.routes";

const routes = express.Router();

routes.use(healthCheckRoutes);

export default routes;