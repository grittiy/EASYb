import mysql from "serverless-mysql";
const  connection = mysql({
    config:{
        host: process.env.DB_HOS,
        user:  process.env.DB_USER,
        database:  process.env.DB_DATABASE 
    },
})
export { connection }