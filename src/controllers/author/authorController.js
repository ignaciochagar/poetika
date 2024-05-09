import { where } from "sequelize";
import authorModel from "../../models/authorModel.js";

async function getAll() {
    try {
        const author = await authorModel.findAll();
        return { data: author };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const author = await authorModel.findByPk(id);
        if (!author) {
            return { error: "El autor no existe" };
        }
        return { data: author };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

async function create(authorData) {
    try {
        const newAuthor = await authorModel.create(authorData);
        console.log("new author",newAuthor);
        return {data:newAuthor};
    } catch (error) {
        console.error(error);
        return {error}
    }


}

async function update(id, authorData) {
    try {
        const { born, name } = authorData;
        const author  = await authorModel.findByPk(id);
        if (!author) {
            return { error: "No se puede modificar un autor que no existe, txoripan!" };
        }
        if (born) {
            author.born = born;
        }
        if (name) {
            author.name = name;
        }
        const newAuthor = await authorModel.update(authorData,
            {
                where: 
                {
                    author_id:id
                }
            }
        );
        return {data:newAuthor};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const result = await authorModel.findByPk(id);
        await result.destroy();
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};