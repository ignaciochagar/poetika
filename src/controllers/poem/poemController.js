import poemModel from "../../models/poemModel.js";

/**
 * @module /controllers/poem/poemController
 */


/**
 * Asynchronously retrieves all poems.
 *
 * @return {Object} An object containing the data array of poems
 */
async function getAll() {
    try {
        const poem = await poemModel.findAll();
        return { data: poem };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

/**
 * Asynchronously retrieves a poem based on the provided ID.
 *
 * @param {number} id - The ID of the poem to retrieve
 * @return {Object} An object containing the retrieved poem data or an error object
 */
async function getById(id) {
    try {
        const poem = await poemModel.findByPk(id);
        if (!poem) {
            return { error: "El poema no existe" };
        }
        return { data: poem };
    }
    catch (error) {
        console.error(error);
        return { error };
    }
}


/**
 * Asynchronously creates a new poem based on the provided poemData.
 *
 * @param {Object} poemData - The data of the poem to be created
 * @return {Object} An object containing the data of the newly created poem
 */
async function create(poemData) {
    try {
        const newPoem = await poemModel.create(poemData);
        console.log("new poem",newPoem);
        return {data:newPoem};
    } catch (error) {
        console.error(error);
        return {error}
    }
}

/**
 * Asynchronously updates a poem based on the provided ID, title, author, year of release, and author ID.
 *
 * @param {number} id - The ID of the poem to update
 * @param {Object} poemData - The data containing the updated title, author, year of release, and author ID
 * @return {Object} An object containing the updated poem data or an error object
 */
async function update(id, poemData) {
    try {
        const { title, author, year_release, author_id} = poemData;
        const poem  = await poemModel.findByPk(id);
        if (!poem) {
            return { error: "No se puede modificar un autor que no existe, txoripan!" };
        }
        if (title) {
            poem.title = title;
        }
        if (author) {
            poem.author = author;
        }
        if (year_release) {
            poem.year_release = year_release;
        }
        if (author_id) {
            poem.author_id = author_id;
        }
        const newPoem = await poemModel.update(poemData,
            {
                where: 
                {
                    poem_id:id
                }
            }
        );        
        return {data:newPoem};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

/**
 * Asynchronously removes a poem based on the provided ID.
 *
 * @param {number} id - The ID of the poem to remove
 * @return {Object} An object containing the removed poem data
 */
async function remove(id) {
    try {
        const result = await poemModel.findByPk(id);
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
