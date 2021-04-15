const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new pg.Pool({
    // user: 'czqnoelhsidmlb',
    // password: '5ba5e2890bb8cecf4e404f47eabf2d13b4232d80ffdefa6a98978f309e0e3f1b',
    // host: 'ec2-3-233-43-103.compute-1.amazonaws.com',
    // port: 5432,
    // database: 'd1cvq07pc5gjsj',
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
    
});

module.exports = pool;