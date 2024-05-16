import { where } from "sequelize";
import authorModel from "../../models/authorModel.js";
import poemModel from "../../models/poemModel.js";

/**
 * @module /controllers/author/authorController
 */

/**
 * Asynchronously retrieves all authors.
 *
 * @return {Object} The data object containing the authors
 */
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

/**
 * Asynchronously retrieves an author and their associated poems based on the provided ID.
 *
 * @param {number} id - The ID of the author to retrieve
 * @return {Object} An object containing the author and their poems if found, otherwise an error object
 */
async function getById(id) {
    try {
        const author = await authorModel.findByPk(id);
        const poem = await poemModel.findAll();
        if (!author) {
            return { error: "El autor no existe" };
        }
        return { data: {author, poem} };
    }
    catch (error) {
        console.error(error);
        return { error };
    }
}


/**
 * Asynchronously creates a new author based on the provided authorData.
 *
 * @param {Object} authorData - The data of the author to be created
 * @return {Object} An object containing the data of the newly created author
 */
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

/**
 * Asynchronously updates author information based on the provided ID and authorData.
 *
 * @param {number} id - The ID of the author to update
 * @param {Object} authorData - The data to update for the author
 * @return {Object} An object containing the updated author data
 */
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

/**
 * Asynchronously removes an author based on the provided ID.
 *
 * @param {number} id - The ID of the author to remove
 * @return {Object} An object containing the removed author data
 */
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