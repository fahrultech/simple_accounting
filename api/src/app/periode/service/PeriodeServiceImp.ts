import { injectable } from 'inversify';
import { IPeriodeService } from './PeriodeService';
import { Periode } from '../entity/Periode';
import { Repository } from 'typeorm';
import AppDataSource from '../../../../data-source';

@injectable()
export class PeriodeServiceImpl implements IPeriodeService {

  private periodeRepository: Repository<Periode>
  
  constructor(){
    this.periodeRepository = AppDataSource.getRepository(Periode)
  }

  async createPeriode(data: Periode): Promise<Periode> {
    const periode = this.periodeRepository.create(data);
    return this.periodeRepository.save(periode);
  }

  async getAllPeriode(page: number, limit: number): Promise<{ data: Periode[], total: number }> {
    const [result, total] = await this.periodeRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      data: result,
      total,
    };
  }

  // Other periode-related methods...
}
