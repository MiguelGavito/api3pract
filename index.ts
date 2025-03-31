import express from 'express';
import tweetsRoutes from './src/routes/tweets';
import userRoutes from './src/routes/user';

const app = express();

app.use(express.json());
app.use('/api/tweets', tweetsRoutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'))