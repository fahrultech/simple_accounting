import { Response, Request } from "express";
import { controller, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { NamaUsahaService } from "../service/NamaUsahaService";

@controller('/namausaha')
export class NamaUsahaController {
    private namaUsahaService: NamaUsahaService

    constructor(){
        this.namaUsahaService = new NamaUsahaService()
    }

    @httpGet('/')
    public async getNamaUsaha(req: Request, res: Response): Promise<Response>{
        try {
            const namaUsaha = await this.namaUsahaService.getNamaUsaha()
            return res.status(200).json(namaUsaha[0])
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    @httpPost('/')
    public async createNamaUsaha(req: Request, res: Response): Promise<Response>{
        try {
            const body = req.body
            const namaUsaha = await this.namaUsahaService.createNamaUsaha(body)
            return res.status(200).json(namaUsaha)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}