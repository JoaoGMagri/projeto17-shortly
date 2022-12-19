import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import categories from "./routers/categories.routers.js";
import games from "./routers/games.routers.js";
import customers from './routers/customers.routers.js';
import rentals from './routers/rentals.routers.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(categories);
app.use(games);
app.use(customers);
app.use(rentals);

app.listen(PORT, () => {
    console.log(`Server running in port: ${port}`);
});