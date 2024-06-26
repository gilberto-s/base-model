import * as dotenv from "dotenv";

dotenv.config();

export class Config {
    getAppEnv = () => {
        return process.env.NODE_ENV || 'develop';
    }
    getAppPort = () => {
        return process.env.PORT || 5000;
    }
    getAppLogger = () => {
        return process.env.LOGGER || 'STAND';
    }
    getAppLogLevel = () => {
        return process.env.LOGLEVEL || 'DEBUG';
    }
    getAppCorsOrigin = () => {
        return process.env.CORS_ORIGIN || '*';
    }
    getAppContentSecurityPolicyScriptSrc = () => {
        return process.env.CONTENT_SECURITY_POLICY_SCRIPTSRC || '*.predict-systems.com,*54.81.3.236*,*.fazendomais.net,*.cloudfront.net';
    }
    getAppContentSecurityPolicyStyleSrc = () => {
        return process.env.CONTENT_SECURITY_POLICY_STYLESRC || '*.predict-systems.com,*54.81.3.236*,*.fazendomais.net,*.cloudfront.net';
    }
    getApiToken = () => {
        return process.env.API_TOKEN;
    }
    getJwtSecret = () => {
        return process.env.JWT_SECRET;
    }
    getAccessHost = () => {
        return process.env.ACCESS_HOST || '';
    }
    getAccessToken = () => {
        return process.env.ACCESS_TOKEN;
    }
}
