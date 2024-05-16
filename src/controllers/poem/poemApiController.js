import poemController from "./poemController.js";

/**
 * @module /controllers/poem/poemApiController
 */


/**
 * Asynchronously retrieves all data from the poem controller and sends the response as JSON.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with error and data
 */
async function getAll(req,res){
    const {error,data} = await poemController.getAll();
    res.json({error,data});
}

/**
 * Asynchronously retrieves an author's poems based on the provided ID and renders them in the author show view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the author show view with error, author data, and associated poems
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await poemController.getById(id)
    res.json({error,data});
}

/**
 * Asynchronously creates a new poem based on the provided title, author, year of release, and author ID from the request query and sends a JSON response with the error and data of the created poem.
 *
 * @param {Object} req - The request object containing the query parameters
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with the error and data of the created poem
 */
async function create(req,res){
    const {title, author, year_release, author_id} = req.query;
    const {error,data} = await poemController.create({title, author, year_release, author_id});
    res.json({error,data});
}

/**
 * Asynchronously updates a poem based on the provided ID, title, author, year of release, and author ID from the request query and sends a JSON response with the error and updated data.
 *
 * @param {Object} req - The request object containing the ID and updated poem details
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with the error and updated data of the poem
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {title, author, year_release, author_id} = req.query;
    const {error,data} = await poemController.update(id,{title, author, year_release, author_id});
    res.json({error,data});
}

/**
 * Asynchronously removes a poem based on the provided ID and sends a JSON response with the error and data of the removed poem.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with the error and data of the removed poem
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await poemController.remove(id);
    res.json({error,data});
}



export {
    getAll,
    getById,
    create,
    update,
    remove
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}
