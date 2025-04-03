import TweetDataBase from "../db/tweet";
import { getNumbersFromDB } from '../db/db';

const tweetDataBase = new TweetDataBase();

class TweetController {
  async getAllTweets(): Promise<number[]> {
    const numbers = await tweetDataBase.getAllTweets();
    
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
  }

  
}

export default TweetController;