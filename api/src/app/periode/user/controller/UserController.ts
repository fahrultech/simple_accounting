import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, httpPut, httpDelete, requestParam } from "inversify-express-utils";
import { IUserService } from "../service/UserService";

@controller('/user')
export class UserController {
    constructor(@inject('UserService') private userService: IUserService){}

    @httpGet('/')
    public async getAllUser(req: Request, res:Response): Promise<Response>{
        try {
            const users = await this.userService.getAllUser()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    @httpPost('/')
    public async createUser(req: Request, res: Response): Promise<Response>{
        try {
            const user = await this.userService.createUser(req)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    @httpGet('/:id')
    public async getUserById(@requestParam('id') id:string, req: Request, res: Response): Promise<Response>{
        try {
            const user = await this.userService.getUserById(id)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    @httpPut('/:id')
    public async updateUser(@requestParam('id') id:string, req: Request, res: Response): Promise<Response>{
        try {
            const user = await this.userService.updateUser(id, req)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    @httpDelete('/:id')
    public async deleteUser(@requestParam('id') id:string, req: Request, res: Response): Promise<Response>{
        try {
            await this.userService.deleteUser(id)
            return res.status(204)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}