import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
<<<<<<< HEAD
        port:3306,
=======
<<<<<<< HEAD
        port:3306,
=======
        port:3310,
>>>>>>> ivan_new
>>>>>>> dev
        dialect:"mysql",
        define: {
            timestamps:false,
            freezeTableName:true,
        }
    }
)

async function authenticate(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

authenticate();

export default sequelize;