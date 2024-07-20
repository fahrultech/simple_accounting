import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NamaUsaha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_usaha: string;

  @Column('text')
  alamat: string;

  @Column()
  kode_pos: string;

  @Column()
  email: string;

  @Column()
  nama_pimpinan: string;
}