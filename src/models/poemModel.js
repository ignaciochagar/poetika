import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

<<<<<<< HEAD

=======
import authorModel from "./authorModel.js"
>>>>>>> ivan_new

const poemModel = sequelize.define("poem",
    {
        poem_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        title: {
<<<<<<< HEAD
            type:DataTypes.STRING(45),
            allowNull:false
        },
        author: {
            type:DataTypes.STRING(45),
            
        },
        year_release:{
            type:DataTypes.INTEGER.UNSIGNED,
=======
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
>>>>>>> ivan_new
        }
    }
)

<<<<<<< HEAD
poemModel.belongsToMany(poemModel,
    {
        through:"poem_has_poem",
        as:"authors",
        foreignKey:"poem_id"
    }
);
=======

/* authorModel.belongsToMany(bandModel,
    {
        through:"band_has_artist",
        as:"bandas",
        foreignKey:"band_id"
    }
); */

/* poemModel.belongsToMany(authorModel,
    {
        //through:"band_has_artist",
        as:"author",
        foreignKey:"author_id"
    }
);
 */
>>>>>>> ivan_new
export default poemModel;