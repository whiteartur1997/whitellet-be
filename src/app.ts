import express from 'express';
import 'dotenv/config';
import {pool} from "./db";

const app = express();

app.use(express.json());

app.get('/wallets', async (_req, res) => {
    console.log("process.env.WHITELLET_DB_PASSWORD", process.env.WHITELLET_DB_PASSWORD)
    try {
        const result = await pool.query('SELECT * FROM wallets');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(process.env.WHITELLET_PORT, () => {
    console.log("hello")
    console.log(`Server is running on http://localhost:${process.env.WHITELLET_PORT}`);
});
