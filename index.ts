import express from 'express';
import tweetsRoutes from './src/routes/tweets.ts';

const app = express();
app.use(express.json());
app.use('api/tweets', tweetsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'))