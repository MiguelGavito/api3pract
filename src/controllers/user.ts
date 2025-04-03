import { Request, Response, NextFunction } from "express";
import UserDataBase from "../db/user";

const userDataBase = new UserDataBase();

class UserController {

  async getAllUsers(request: Request, response: Response, next: NextFunction){
    try {
      const users = await userDataBase.getAllUsers();
      response.json(users)
    } catch (error){
      next(error)
    }
  }
}

export default UserController;