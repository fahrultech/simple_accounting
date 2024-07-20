import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, requestParam } from "inversify-express-utils";
import { IPerkiraanService } from "../service/PerkiraanService";

@controller('/perkiraan')
export class PerkiraanController {
    constructor(@inject('PerkiraanService') private perkiraanService: IPerkiraanService) { }

    @httpGet('/')
    public async getAllPerkiraan(req: Request, res: Response): Promise<Response> {
        try {
            const perkiraans = await this.perkiraanService.getAllPerkiraan(req)
            return res.status(200).json(perkiraans)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    @httpPost('/')
    public async CreatePerkiraan(req: Request, res: Response): Promise<Response> {
        try {
            const perkiraan = await this.perkiraanService.createPerkiraan(req)
            return res.status(201).json(perkiraan)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    @httpGet('/:id')
    public async getPerkiraanById(@requestParam('id') id: string, req: Request, res: Response): Promise<Response> {
        try {
            const perkiraan = await this.perkiraanService.getPerkiraanById(id)
            if(!perkiraan){
                return res.status(404).json({message: 'Perkiraan tidak di temukan'})
            }
            return res.status(200).json(perkiraan)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}