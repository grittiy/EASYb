import type { NextApiRequest,NextApiResponse } from "next";
import {pool} from "config/db"
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

const getUsers = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const results =await pool.query("SELECT * FROM user")  
    return res.status(200).json(results);  
  }catch (error){
    return res.status(500).json({ error });
  }
}


const saveUsers = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const { 
      user_id,
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
    } = req.body;
    

    const result = await pool.query("INSERT INTO user SET ?",
    {
      user_id,
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
    }) as any  
    let message;
    if(result.insertId) {
      return res.status(200).json({  ...req.body, id: result.insertId});
    }else{
      message = "error"
      return  res.status(500).json({ message });
    }
  }catch(err){
    if (err) {
      res.status(500).json({ error: err});
    }
    console.error(err)    
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