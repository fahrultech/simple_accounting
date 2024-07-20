import { User } from "../entity/User";
import { Request } from "express";


export interface IUserService {
    getAllUser(): Promise<User[]>
    getUserById(id: string): Promise<User | null>
    createUser(request: Request): Promise<User>
    updateUser(id: string, request: Request): Promise<User | null>
    deleteUser(id: string): Promise<void>
}