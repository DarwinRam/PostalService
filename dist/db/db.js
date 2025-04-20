"use strict";
// src/db/db.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = require("pg");
// Create a connection pool
const pool = new pg_1.Pool({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost',
    database: 'packages', // Replace with your PostgreSQL database name
    password: '#Pringles12', // Replace with your PostgreSQL password
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
const query = (text, params) => pool.query(text, params);
exports.query = query;
exports.default = pool; // Export the pool to be used in other parts of the application
