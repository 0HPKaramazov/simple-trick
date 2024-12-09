import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import cardRoutes from './routes/cardRoutes.js'
import { saveCard } from './controllers/cardControllers.js'


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors());


app.get('/', (req, res) => {
    res.status(200).send('Up and running...');
});

app.post('/crd', saveCard);

//app.use('/crd', cardRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on: http://localhost:${PORT}`)))
    .catch((error) => console.log(error));