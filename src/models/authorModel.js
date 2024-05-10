import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

<<<<<<< HEAD

=======
import poemModel from "./poemModel.js";
>>>>>>> dev

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
<<<<<<< HEAD
        
        },
        born:{
            type:DataTypes.INTEGER
=======
        },
        born:{
            type:DataTypes.INTEGER, 
            allowNull:false
>>>>>>> dev
        }
    }
)

<<<<<<< HEAD


export default authorModel;
=======
/* authorModel.hasMany(poemModel,
    {
        as:"poem",
        foreignKey:"poem_id"
    }
); */

/* poemModel.belongsTo(authorModel,
    {
        //through:"band_has_artist",
        as:"author",
        foreignKey:"author_id"
    }
); */

export default authorModel;
>>>>>>> dev
