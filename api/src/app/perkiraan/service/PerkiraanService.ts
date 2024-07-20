import { Request } from "express";
import { Perkiraan } from "../entity/Perkiraan";

export interface IPerkiraanService {
    getAllPerkiraan(req: Request): Promise<{perkiraan:Perkiraan[], total: number}>
    getPerkiraanById(id: string): Promise<Perkiraan | null>
    createPerkiraan(request: Request): Promise<Perkiraan | null>
}