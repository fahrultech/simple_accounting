import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './config/inversy.config';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import AppDataSource from '../data-source';
import './app/periode/controller/PeriodeController'
import './app/perkiraan/controller/PerkiraanController'

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

const server = new InversifyExpressServer(container, null, { rootPath:'/api/v1'});

server.setConfig((app) => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
});

const app = server.build();
export default app;
