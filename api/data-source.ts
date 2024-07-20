import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Periode } from './src/app/periode/entity/Periode';
import { Perkiraan } from './src/app/perkiraan/entity/Perkiraan';
import { User } from './src/app/periode/user/entity/User';

config()

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Periode, Perkiraan, User],
  synchronize: false,
  migrations: ['src/migration/**/*.ts'],
  logging: true,
});

export default AppDataSource;