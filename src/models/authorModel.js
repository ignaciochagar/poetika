import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const authorModel = sequelize.define("author",
    {
        author_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type:DataTypes.STRING(45),
            allowNull:false
        
        },
        born:{
            type:DataTypes.INTEGER
        }
    }
)



export default authorModel;
