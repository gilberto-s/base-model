import { App } from "./App";
import { WinstonLogger } from "./adapters/logger/WinstonLogger";
import { Config } from "./config/config";

const app = new App().server;
const config = new Config();
const logger = new WinstonLogger();

const PORT = config.getAppPort();

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
