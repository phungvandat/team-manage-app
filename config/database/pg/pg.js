require('dotenv').config()
const pg = require('pg');
module.exports = { 
    pool : new pg.Pool({
        user: process.env.USER_DB,
        host: process.env.HOST_DB,
        database: process.env.NAME_DB,
        password: process.env.PASSWORD_DB,
        port: process.env.PORT_DB,
    }),
}