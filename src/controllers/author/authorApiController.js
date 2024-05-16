import authorController from "./authorController.js";

/**
 * @module /controllers/author/authorApiController
 */

/**
 * Asynchronously retrieves all authors and sends the response as JSON.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response
 */
async function getAll(req, res) {
    const { error, data } = await authorController.getAll();
    res.json({ error, data });
}

/**
 * Function to get data by ID.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {Object} JSON response with error and data
 */
async function getById(req, res) {
    const id = parseInt(req.params.id);
/**
 * Function to get data by ID.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {Object} JSON response with error and data
 */
    console.log("id", id);
    const { error, data } = await authorController.getById(id)
    res.json({ error, data });
}

/**
 * Asynchronously creates a new author based on the provided name and born parameters from the request query.
 *
 * @param {Object} req - The request object containing the query parameters
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with the error and data of the created author
 */
async function create(req, res) {
    const { name, born } = req.query;
    const { error, data } = await authorController.create({ name, born });
    res.json({ error, data });
}

/**
 * Asynchronously updates author information based on the provided ID, name, and birth parameters.
 *
 * @param {Object} req - The request object containing the necessary information
 * @param {Object} res - The response object
 * @return {void} Sends a JSON response with the error and updated author data
 */
async function update(req, res) {
    const id = parseInt(req.params.id);
    const { name, born } = req.query;
    const { error, data } = await authorController.update(id, { name, born });
    res.json({ error, data });
}

/**
 * Asynchronously removes an author based on the provided ID.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {Object} JSON response with error and data
 */
async function remove(req, res) {
    const id = parseInt(req.params.id);
    const { error, data } = await authorcontroller.remove(id);
    res.json({ error, data });
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