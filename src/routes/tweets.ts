import express from 'express';
import TweetHttpHandler from '../handlers/tweet';

const router = express.Router();

const tweetHttpHandler = new TweetHttpHandler();

router.get('/', tweetHttpHandler.getTweets);
router.get('/:id', tweetHttpHandler.getTweetById);
router.put('/:id', updateTweet);
router.delete('/:id', deleteTweet);

export default router;