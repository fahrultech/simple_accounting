import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Perkiraan {
  @PrimaryColumn()
  no_perkiraan: string;

  @Column()
  nama_perkiraan: string;

  @Column()
  kelompok: string;

  @Column()
  keterangan: string;
}
