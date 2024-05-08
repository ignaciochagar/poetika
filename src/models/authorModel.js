import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

//import poemModel from "./poemModel.js";

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
            type:DataTypes.INTEGER, 
            allowNull:false
        }
    }
)

/* authorModel.belongsToMany(poemModel,
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

export default authorModel;