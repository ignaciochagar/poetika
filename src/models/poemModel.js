import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const poemModel = sequelize.define("poem",
    {
        poem_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        title: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        author: {
            type:DataTypes.STRING(45),
            
        },
        year_release:{
            type:DataTypes.INTEGER.UNSIGNED,
        }
    }
)

poemModel.belongsToMany(poemModel,
    {
        through:"poem_has_poem",
        as:"authors",
        foreignKey:"poem_id"
    }
);
export default poemModel;