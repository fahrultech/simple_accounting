"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const PeriodeServiceImp_1 = require("../app/periode/service/PeriodeServiceImp");
const container = new inversify_1.Container();
exports.container = container;
container.bind('PeriodeService').to(PeriodeServiceImp_1.PeriodeServiceImpl);
