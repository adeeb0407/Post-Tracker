import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postsRouter from './routes/posts.js';
import usersRouter from './routes/users.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;


//Method - 1
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDB connection established successfully...');
// })

//Method - 2
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

app.use('/posts', postsRouter);
app.use('/users', usersRouter);
//Server Check
// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
// })
