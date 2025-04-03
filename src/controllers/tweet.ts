import TweetDataBase from "../db/tweet";

const tweetDataBase = new TweetDataBase();

class TweetController {

  async getAllTweets(){
    return await tweetDataBase.getAllTweets();
  }
}

export default TweetController;