import { Periode } from "../entity/Periode";

export interface IPeriodeService {
  createPeriode(data: Periode): Promise<Periode>;
  getAllPeriode(page: number, limit: number): Promise<{ data: Periode[], total: number }>;
  // Other periode-related methods...
}
