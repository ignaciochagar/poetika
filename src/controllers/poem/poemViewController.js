import poemController from "./poemController.js";
import authorController from "../author/authorController.js"
import authorModel from "../../models/authorModel.js";

/**
 * @module /controllers/poem/poemViewController
 */

/**
 * Asynchronously retrieves all data from the poem controller and renders the data in the poem list view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the poem list view with error and data
 */
async function getAll(req,res){
    const {error,data} = await poemController.getAll();
    res.render("poem/list",{error,data});
}

/**
 * Asynchronously retrieves an individual poem based on the provided ID and renders it in the poem show view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the poem show view with error and poem data
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await poemController.getById(id)
    res.render("poem/show",{error,poem:data});
}

/**
 * Retrieves poems by the first letter of their title and renders them in the poem letter view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the poem letter view with error and poem data
 */
async function getByLetter(req,res) {
    const letra = req.params.letter;
    const {error,data} = await poemController.getAll()
    let poemUnity = [];
    let poemArray = [];
    let poem;
    let comienzo;
    for (poem of data) {
        comienzo = poem.title;
        comienzo = comienzo.charAt(0)
        if (comienzo == letra) {
            poemUnity = [poem.poem_id, `${poem.poem_id} - ${poem.title} (${poem.year_release})`]
            poemArray.push(poemUnity)
        }        
    }
    if (poemArray.length != 0) {
        res.render('poem/letter', {error,data:poemArray});
    } else {
        let poemNone = 'No hay registros con su seleccion';
        res.render('poem/letter', {error,dataNone:poemNone});
    }
}

/**
 * Renders a form for creating a new poem with data from the authorController.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the new poem form with authors data
 */
async function createForm(req,res){
    const {error,data} = await authorController.getAll();
    res.render("poem/new", {authors:data});
}

/**
 * Creates a new poem based on the input data, linking it to an existing author or a new one.
 *
 * @param {Object} req - The request object containing the data for the new poem
 * @param {Object} res - The response object to send back the result
 * @return {void} Redirects to "/poem" if successful, sends specific messages for different cases
 */
async function create(req,res){
    const {title, year_release, author_id} = req.body;

    if (author_id >= 1) {
        const name = await authorModel.findByPk(author_id);
        let author = name.name;
        const {error,data} = await poemController.create({title, author, year_release, author_id});
        res.redirect("/poem");
    } else if (author_id === "newAuthor") {
        res.send('Aqui es para un nuevo autor')
    } else {
        res.send('Aqui es donde falla si no seleccionas nada')
    }
}

/**
 * Asynchronously retrieves an individual poem based on the provided ID and renders it in the poem update view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Renders the poem update view with error and poem data
 */
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:poem}= await poemController.getById(id);
    res.render("poem/update",{error,poem});
}

/**
 * Updates a poem based on the provided ID, title, author, year of release, and author ID from the request body and redirects to "/poem".
 *
 * @param {Object} req - The request object containing the ID and updated poem details
 * @param {Object} res - The response object
 * @return {void} Redirects to "/poem"
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {title, author, year_release, author_id} = req.body;
    const {error,data} = await poemController.update(id,{title, author, year_release, author_id});
    res.redirect("/poem");
}

/**
 * Asynchronously removes a poem based on the provided ID and redirects to "/poem".
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {void} Redirects to "/poem"
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await poemController.remove(id);
    res.redirect("/poem");
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
