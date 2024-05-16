import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const userModel = sequelize.define("user",
{
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    }/* ,
    name: {
        type: DataTypes.STRING(45),
        allowNull:true
    } */,
    email: {
        type: DataTypes.STRING(45),
        allowNull:false,
        unique:true
    },
    password: {
        type:DataTypes.STRING(70),
        allowNull:false
    }/* , 
    author_id:{
        type:DataTypes.INTEGER,
        allowNull:true
    }, 
    role_id: {
        type:DataTypes.INTEGER,
        allowNull:true
    } */
});

export default userModel;