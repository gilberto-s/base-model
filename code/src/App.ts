import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import helmet from "helmet";
import routes from "./adapters/http/routes/routes";
import { Config } from "./config/config";
import { LogLevel } from "./core/enums/LogLevel";
import { WinstonLogger } from "./adapters/logger/WinstonLogger";

export class App {
    server:express.Express;
    private logger:WinstonLogger;
    private config:Config;
    private logLevel:LogLevel;
    
    constructor(){
        this.server = express();
        this.logger = new WinstonLogger();
        this.config = new Config();
        this.logLevel = LogLevel.INFO;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(morgan('tiny', { stream: { 
            write: message => this.logger.log(this.logLevel, message) 
        }}));
        this.server.use(cors({
            origin: this.config.getAppCorsOrigin(),
            methods: 'GET,HEAD,PATCH,POST,DELETE',
            preflightContinue: false,
            optionsSuccessStatus: 204,
        }));
        this.server.use(express.json());
        this.server.disable('x-powered-by');

        if (this.config.getAppEnv() === 'production') {
            const scriptSrc = this.config.getAppContentSecurityPolicyScriptSrc().split(',') || [];
            const styleSrc = this.config.getAppContentSecurityPolicyStyleSrc().split(',') || [];

            this.server.use(helmet.frameguard({ action: 'deny' }));
            this.server.use(helmet.hidePoweredBy());
            this.server.use(helmet.contentSecurityPolicy({
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'", ...scriptSrc],
                    objectSrc: ["'self'"],
                    'img-src': ["'*'"],
                    'style-src': ["'self'", ...styleSrc],
                }
            }));
        }
    }

    routes(){
        this.server.use(routes);
    }
}