import { LogLevel } from "../enums/LogLevel";

export interface LoggerPort {
    log(level:LogLevel, message:string, context?:{}):void;
    info(message:string, context?:{}):void;
    debug(message:string, context?:{}):void;
    warn(message:string, context?:{}):void;
    error(message:string, context?:{}):void;
}
