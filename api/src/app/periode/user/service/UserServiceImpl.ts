import { injectable } from "inversify";
import { IUserService } from "./UserService";
import { User } from "../entity/User";
import { Repository } from "typeorm";
import AppDataSource from "../../../../../data-source";
import { Request } from "express";

@injectable()
export class UserServiceImpl implements IUserService{
    
    private userRepository: Repository<User>

    constructor(){
        this.userRepository = AppDataSource.getRepository(User)
    }

    async getAllUser(): Promise<User[]> {
        return this.userRepository.find()
    }

    async createUser(request: Request): Promise<User> {
        const body = request.body
        return this.userRepository.save(body)
    }

    async getUserById(id: string): Promise<User | null> {
        return this.userRepository.findOneBy({user_id:id})
    }

    async updateUser(id: string, request: Request): Promise<User | null> {
        const body = request.body
        await this.userRepository.update(id, body)
        return this.getUserById(id)
    }

    async deleteUser(id: string): Promise<void>{
        await this.userRepository.delete(id)
    }
}