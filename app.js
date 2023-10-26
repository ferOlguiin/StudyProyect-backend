import express from 'express';
import cors from 'cors';
import router from './routes/index.routes.js';

const app = express();

app.use(cors({origin: "https://estudiotopia.online"}))
app.use(express.json());

app.use(router);

export default app;