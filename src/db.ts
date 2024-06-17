import pg from "pg"

const { Pool } = pg;

export const pool = new Pool({
database: process.env.WHITELLET_DB_NAME,
host: 'localhost',
user: process.env.WHITELLET_DB_USER,
password: process.env.WHITELLET_DB_PASSWORD,
port: 5432, // default port for PostgreSQL
});

pool.on("connect", () => {
    console.log("connected to DB")
})
