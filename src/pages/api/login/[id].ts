import { pool } from 'config/db';
import type { NextApiRequest, NextApiResponse } from 'next'
import error from 'next/error';


// get the client
// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_DATABASE
// });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            return await getTask(req, res);
          case "DELETE":
            return await deleteUser(req, res);
          case "PUT":
            return await updateUser(req, res);
          default:
            return res.status(400).json({ message: "bad request" });
    }

    // const { id } = req.query
    // connection.query(
    //     'SELECT * FROM `user` WHERE `user_id` = ?', [id],
    //     function (err: any, results: any) {
    //         res.status(200).json(results)
    //     }
    // );
}

const getTask = async (req:any,res:any) => {
    try{
        const result =await pool.query("SELECT * FROM user WHERE user_id = ?",[req.query.id])as any  
        return res.status(200).json(result[0]);
    }catch (err) {
        if (err) {
            res.status(500).json({ error: err});
          }
          console.error(err)    
    }
}

const deleteUser = async (req:any,res:any) => {
    try{
       await pool.query("DELETE FROM user WHERE user_id = ?", [req.query.id])
       return res.status(204).json();
    }catch (err) {
        if (err) {  
            res.status(500).json({ error: err});
          }
          console.error(err)   
    }
}

const updateUser = async (req:any,res:any) => {
    try{
        console.log(req.body)
       await pool.query("UPDATE user SET ? WHERE user_id  = ?", [req.body,req.query.id])
       return res.status(204).json();
    }catch (err) {
        if (err) {
            res.status(500).json({ error: err});
          }
          console.error(err)   
    }
}