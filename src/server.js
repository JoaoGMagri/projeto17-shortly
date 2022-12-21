import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import session from './routers/session.routers.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(session);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
});