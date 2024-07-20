import { injectable } from 'inversify';
import { Request } from 'express';
import { IPerkiraanService } from './PerkiraanService';
import { Perkiraan } from '../entity/Perkiraan';
import AppDataSource from '../../../../data-source';
import { Repository } from 'typeorm';

@injectable()
export class PerkiraanService implements IPerkiraanService {
  private perkiraanRepository: Repository<Perkiraan>;

  constructor() {
    this.perkiraanRepository = AppDataSource.getRepository(Perkiraan);
  }

  async createPerkiraan(request: Request): Promise<Perkiraan | null> {
    const body: Perkiraan = request.body
    await this.perkiraanRepository.insert(body);
    // Since `insert` does not return the inserted entity, we need to manually fetch it
    return this.perkiraanRepository.findOne({ where: { no_perkiraan: body.no_perkiraan } });
  }

  async getAllPerkiraan(req: Request): Promise<{ perkiraan: Perkiraan[], total: number }> {
    const page: number = parseInt(req.query.page as string)
    const limit: number = parseInt(req.query.limit as string)

    const [result, total] = await this.perkiraanRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      perkiraan: result,
      total,
    };
  }

  async getPerkiraanById(id: string): Promise<Perkiraan | null> {
      const perkiraan = await this.perkiraanRepository.findOneBy({no_perkiraan:id}) || null
      return perkiraan
  }

  // Other perkiraan-related methods...
}
