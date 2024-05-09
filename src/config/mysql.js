import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
<<<<<<< HEAD
//const mysql = require('mysql2');
=======
>>>>>>> ivan

async function createConnection(){
    const connection = await mysql.createConnection(
        {
            host: process.env.MYSQL_HOST,
<<<<<<< HEAD
            port: 3306,
=======
            port: 3310,
>>>>>>> ivan
            user:process.env.MYSQL_USER,
            password:process.env.MYSQL_PASSWORD,
            database:process.env.MYSQL_DATABASE
        }
    )
    console.log("conexión satisfactoria con la base de datos!");
    return connection;
}
const connection = await createConnection();

export default connection