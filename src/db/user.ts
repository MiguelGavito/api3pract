import { Request, Response, NextFunction } from "express";

class UserDataBase {
  async getAllUsers() {
    return [10,9,8,7,6,5,4,3,2,1]
  }
}

export default UserDataBase;