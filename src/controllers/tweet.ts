import { Request, Response, NextFunction } from "express";
import TweetDataBase from "../db/tweet";

const tweetDataBase = new TweetDataBase();

class TweetController {

  async getAllTweets(request: Request, response: Response, next: NextFunction){
    try {
      const tweets = await tweetDataBase.getAllTweets();
      response.json(tweets)
    } catch (error){
      next(error)
    }
  }
}

export default TweetController;