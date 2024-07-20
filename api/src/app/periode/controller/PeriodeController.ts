import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { IPeriodeService } from "../service/PeriodeService";

@controller('/periode')
export class PeriodeController {
    constructor(@inject('PeriodeService') private periodeService: IPeriodeService){}

    @httpGet('/')
    public async getAllPeriode(req: Request, res:Response): Promise<Response>{
        try {
            const page = parseInt(req.query.page as string)
            const limit = parseInt(req.query.limit as string)

            const {data, total} = await this.periodeService.getAllPeriode(page, limit)

            return res.status(200).json({data, total})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    @httpPost('/')
    public async createPeriode(req: Request, res: Response): Promise<Response>{
        try {
            const body = req.body
            const periode = await this.periodeService.createPeriode(body)
            
            return res.status(200).json(periode)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}