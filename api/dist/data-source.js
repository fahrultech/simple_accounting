"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const Periode_1 = require("./src/app/periode/entity/Periode");
(0, dotenv_1.config)();
const AppDataSource = new typeorm_1.DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Periode_1.Periode],
    synchronize: false,
    migrations: ['src/migration/**/*.ts'],
    logging: true,
});
exports.default = AppDataSource;
