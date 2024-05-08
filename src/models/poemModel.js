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
            type: DataTypes.STRING(45),
            allowNull:false
        },
        author:{
            type: DataTypes.STRING(45), 
            allowNull:false
        }, 
        year_release:{
            type: DataTypes.INTEGER
        }, 
        author_id:{
            type: DataTypes.INTEGER,
            primaryKey:true, 
            allowNull:false
        }
    }
)


/* authorModel.belongsToMany(bandModel,
    {
        through:"band_has_artist",
        as:"bandas",
        foreignKey:"band_id"
    }
);
bandModel.belongsToMany(artistModel,
    {
        through:"band_has_artist",
        as:"artistas",
        foreignKey:"artist_id"
    }
); */

export default poemModel;