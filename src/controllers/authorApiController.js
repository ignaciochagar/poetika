import authorController from "./authorController.js";

async function getAll(req, res){
    const {error, data} = await authorController.getAllAuthors();
    res.json({error, data});
}

async function getById(req, res){
    const id = parseInt(req.params.id);
    console.log("id", id);
    const {error, data} = await authorController.getAuthorById(id);
    res.json({error, data});
}

async function create(req, res){
    const {name, born_year} = req.query;
    const {error, data} = await authorController.createAuthor({Name: name, Born_Year: born_year});
    res.json({error, data});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const {name, born_year} = req.query;
    const {error, data} = await authorController.updateAuthor(id, {Name: name, Born_Year: born_year});
    res.json({error, data});
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const {error, data} = await authorController.removeAuthor(id);
    res.json({error, data});
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
