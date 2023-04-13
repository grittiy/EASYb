import type { NextApiRequest,NextApiResponse } from "next";
import {connection} from "config/db"
import error from "next/error";
import { type } from "os";
// const mysql = require('mysql2');
 
// create the connection to database
// const connection = mysql.createConnection({
//   host: process.env.DB_HOS,
//   user:  process.env.DB_USER,
//   database:  process.env.DB_DATABASE
// });

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  switch (req.method) {
    case "GET":
      return await getUsers(req, res);

    case "POST":
      return await saveUsers(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getUsers = async (req:any, res:any) => {
  try {
    const results =await connection.query("SELECT * FROM user")  
    return res.status(200).json(results);  
  }catch (error){
    return res.status(500).json({ error });
  }
}


const saveUsers = async (req:any, res:any) => {
  try {
    const { 
      user_pname, 
      first_name, 
      last_name,
      user_sex,
      user_age,
      user_position,
      user_person,
      user_phone,
      user_fax,
      user_name,
      user_password,
      user_email,
      in_personnel_id,
      ex_personnel,
      user_details,
      line_user_id,
      status_user_id,
      group_user_id
    } = req.body.user_name;
    

    const result = await connection.query("INSERT INTO user (user_name)",
    {
      user_pname, 
      first_name, 
      last_name,
      user_sex,
      user_age,
      user_position,
      user_person,
      user_phone,
      user_fax,
      user_name,
      user_password,
      user_email,
      in_personnel_id,
      ex_personnel,
      user_details,
      line_user_id,
      status_user_id,
      group_user_id
    })    
    let message;
    return res.status(200).json({  ...req.body, id: result.insertId});
  }catch(err){
    res.status(500).json({ error: error.message  });
  }
}



//eslint-disable-next-line import/no-anonymous-default-export
// export default  (req: NextApiRequest, res: NextApiResponse)=> {
//     connection.query(
//         'SELECT * FROM `user`',
//         function(err:any, results:any, fields:any) {
//           res.status(200).json(results)
//         }
//       );
 
// }