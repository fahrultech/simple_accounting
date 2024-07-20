import { Repository } from "typeorm";
import AppDataSource from "../../../../data-source";
import { NamaUsaha } from "../entity/NamaUsaha";

export class NamaUsahaService {
    private namaUsahaRepository: Repository<NamaUsaha>

    constructor(){
        this.namaUsahaRepository = AppDataSource.getRepository(NamaUsaha)
    }

    public async getNamaUsaha(): Promise<NamaUsaha[]>{
        return this.namaUsahaRepository.find()
    }

    public async getNamaUsahaById(id: number): Promise<NamaUsaha | null>{
        return this.namaUsahaRepository.findOne({ where: {id}})
    } 

    public async createNamaUsaha(namaUsaha: NamaUsaha): Promise<NamaUsaha>{
        return this.namaUsahaRepository.save(namaUsaha)
    }

    public async updateNamaUsaha(id: number, namaUsaha: NamaUsaha): Promise<NamaUsaha | null>{
        this.namaUsahaRepository.update(id, namaUsaha)
        return this.getNamaUsahaById(id)
    }
}