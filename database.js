const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "WadHomework",
    host: "localhost",
    port: "5432"
});

const execute = async(query1, query2) => {
    try {
        await pool.connect(); 
        await pool.query(query1); 
        await pool.query(query2);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

const createposttablequery = `
CREATE TABLE IF NOT EXISTS "posts" (
    "id" SERIAL PRIMARY KEY,         
    "post_date" DATE DEFAULT CURRENT_DATE,
    "body" VARCHAR(200) NOT NULL,
    "urllink" VARCHAR(200)  
);`;

execute(createTblQuery,createposttablequery).then(result => {
    if (result) {
        console.log('Table "users" is created, Table posts is created');
    }
});

module.exports = pool;