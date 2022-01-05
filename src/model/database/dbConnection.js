const { Pool }= require('pg')

// set environment variables  

require('dotenv').config()

const db= new Pool({
    host: process.env.HOST_PG,
    user: process.env.USER_PG,
    password: process.env.PASSWORD_PG,
    database: process.env.DATABASE_PG,
    port: process.env.PORT_PG,
})

module.exports = {
    query: (text, params, callback)=>{
        return db.query(text, params, callback)
    }
}