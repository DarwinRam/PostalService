// src/db/db.ts

import { Pool } from 'pg';

// Create a connection pool
const pool = new Pool({
  user: 'postgres',    // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'packages', // Replace with your PostgreSQL database name
  password: '#Pringles12',// Replace with your PostgreSQL password
  port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to PostgreSQL database');
    release();
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// make variables available for importing from other files
export const query = (text, params) => pool.query(text, params);


export default pool;  // Export the pool to be used in other parts of the application


