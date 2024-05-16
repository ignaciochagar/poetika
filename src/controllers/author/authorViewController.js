import authorController from "./authorController.js";
import poemController from "../poem/poemController.js";

/**
 * @module /controllers/author/authorViewController
 */

/**
 * Asynchronously retrieves all authors and renders the data in the author list view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the author list view with error and data
 */
async function getAll(req,res){
    const {error,data} = await authorController.getAll();
    res.render("author/list",{error,data});
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
    const {error,data} = await authorController.getById(id)
    let findData;
    let poemArray = []
    let poemUnity = []
    for (let i = 0; data['poem'].length > i; i++) {
        findData = data['poem'][i]['dataValues'];
        if (data['poem'][i]['dataValues']['author_id'] == id) {
            poemUnity = [findData['title'], findData['year_release'], findData['poem_id']]
            poemArray.push(poemUnity);
        }
    }
    res.render("author/show",{error,author:data['author'], poemArray});
}

/**
 * Retrieves authors by the first letter of their name and renders them in the author letter view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the author letter view with error and author data
 */
async function getByLetter(req,res) {
    const letra = req.params.letter;
    const {error,data} = await authorController.getAll()
    let authorUnity = [];
    let authorArray = [];
    let author;
    let comienzo;
    for (author of data) {
        comienzo = author.name;
        comienzo = comienzo.charAt(0)
        if (comienzo == letra) {
            authorUnity = [author.author_id, `${author.author_id} - ${author.name} (${author.born})`]
            authorArray.push(authorUnity)
        }        
    }
    if (authorArray.length != 0) {
        res.render('author/letter', {error,data:authorArray});
    } else {
        let authorNone = 'No hay registros con su seleccion';
        res.render('author/letter', {error,dataNone:authorNone});
    }
}

/**
 * Renders the form for creating a new author.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the new author form view
 */
async function createForm(req,res){
    res.render("author/new");
}

/**
 * Asynchronously creates a new author based on the provided name and born parameters from the request body and redirects to the author page.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Redirects to the author page
 */
async function create(req,res){
    const {name, born} = req.body;
    const {error,data} = await authorController.create({name, born});
    res.redirect("/author");
}

/**
 * Retrieves data based on the provided ID and renders the author update view with error and author data.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the author update view with error and author data
 */
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data}= await authorController.getById(id);
    res.render("author/update",{error,author:data['author']});
}

/**
 * Updates author information based on the provided request data.
 *
 * @param {Object} req - the request object containing parameters and body data
 * @param {Object} res - the response object used to redirect to /author
 * @return {Promise<void>} - a Promise that resolves when the author information is updated
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {name, born} = req.body;
    const {error,data} = await authorController.update(id,{name, born});
    res.redirect("/author");
}

/**
 * Asynchronously removes an author based on the provided ID.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Redirects to the author page
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await authorController.remove(id);
    res.redirect("/author");
}



export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
    getByLetter
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
    getByLetter
}