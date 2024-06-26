import * as winston from "winston";
import { LoggerPort } from "../../core/ports/LoggerPort";
import { LogLevel } from "../../core/enums/LogLevel";
import { Config } from "../../config/config";

const config = new Config();

const logger = winston.createLogger({
    transports: [new winston.transports.Console({
        format: winston.format.combine(
            winston.format.label({ label: config.getAppLogger() }),
            winston.format.timestamp(),
            winston.format.printf(({ level, message, label, timestamp, context = null }) => {
                return `${timestamp} [${label}] ${level}: ${message} ${context
                    ? '[CONTEXT] ->' + '\n' + JSON.stringify(context, null, 2) : ''}`;
            }),
        ),
    })]
})

export class WinstonLogger implements LoggerPort {
    log(level: LogLevel, message: string, context?: {} | undefined): void {
        logger.log(level, message, { context: context });
    }
    info(message: string, context?: {} | undefined): void {
        logger.info(message, { context: context });
    }
    debug(message: string, context?: {} | undefined): void {
        logger.debug(message, { context: context });
    }
    warn(message: string, context?: {} | undefined): void {
        logger.warn(message, { context: context });
    }
    error(message: string, context?: {} | undefined): void {
        logger.error(message, { context: context });
    }
}
