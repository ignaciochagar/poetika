import authorController from "./authorController.js";

async function getAll(req, res){
    const {error, data} = await authorController.getAllAuthors();
    res.render("author/list", {error, data});
}

async function getById(req, res){
    const id = parseInt(req.params.id);
    console.log("id", id);
    const {error, data} = await authorController.getAuthorById(id);
    res.render("author/show", {error, author: data});
}

async function createForm(req, res){
    res.render("author/new");
}

async function create(req, res){
    const {name, Born_Year} = req.body;
    const {error, data} = await authorController.createAuthor({Name: name, Born_Year: born_year});
    res.redirect("/author");
}

async function updateForm(req, res){
    const id = parseInt(req.params.id);
    const {error, data: author} = await authorController.getAuthorById(id);
    res.render("author/update", {error, author});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const {name, Born_Year} = req.body;
    const {error, data} = await authorController.updateAuthor(id, {Name: name, Born_Year: born_year});
    res.redirect("/author");
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const {error, data} = await authorController.removeAuthor(id);
    res.redirect("/author");
}

export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
};

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
};
