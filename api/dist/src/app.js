"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversy_config_1 = require("./config/inversy.config");
const body_parser_1 = require("body-parser");
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = __importDefault(require("../data-source"));
require("./app/periode/controller/PeriodeController");
dotenv_1.default.config();
data_source_1.default.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
const server = new inversify_express_utils_1.InversifyExpressServer(inversy_config_1.container);
server.setConfig((app) => {
    app.use((0, body_parser_1.json)());
    app.use((0, body_parser_1.urlencoded)({ extended: true }));
});
const app = server.build();
exports.default = app;
