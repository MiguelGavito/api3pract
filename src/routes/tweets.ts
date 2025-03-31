import express from 'express';

const router = express.Router();

router.get('/', getTweets)

export default router;