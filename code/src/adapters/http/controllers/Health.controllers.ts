import { Request, Response } from "express";

export class HealthController {
    async checkStatus(req: Request, res: Response) {
        return res.status(200).send({ message: "ok" });
    }
}
