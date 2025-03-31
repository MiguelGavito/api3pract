import { Request, Response, NextFunction} from 'express';

class UserHttpHandler {
  async getUsers(request: Request, response: Response, next: NextFunction){
    try {
      const users = await this.getUsers();
      response.json(users)
    } catch (error){
      next(error)
    }
  }
}

export default UserHttpHandler;