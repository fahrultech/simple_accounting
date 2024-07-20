import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Periode {
  @PrimaryColumn()
  periode: string;

  @Column()
  dari_tgl: Date;

  @Column()
  sampai_tgl: Date;

  @Column()
  keterangan: string;
}