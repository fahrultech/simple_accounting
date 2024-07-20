import { Container } from "inversify";
import { IPeriodeService } from "../app/periode/service/PeriodeService";
import { PeriodeServiceImpl } from "../app/periode/service/PeriodeServiceImp";
import { IPerkiraanService } from "../app/perkiraan/service/PerkiraanService";
import { PerkiraanService } from "../app/perkiraan/service/PerkiraanServiceImpl";
import { IUserService } from "../app/periode/user/service/UserService";
import { UserServiceImpl } from "../app/periode/user/service/UserServiceImpl";

const container = new Container()

container.bind<IPeriodeService>('PeriodeService').to(PeriodeServiceImpl)
container.bind<IPerkiraanService>('PerkiraanService').to(PerkiraanService)
container.bind<IUserService>('UserService').to(UserServiceImpl)

export { container }