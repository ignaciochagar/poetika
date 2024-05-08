import poemController from "./poemController.js";

async function getAll(req,res){
    const {error,data} = await poemController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await poemController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    const {title, author, year_release, author_id} = req.query;
    const {error,data} = await poemController.create({title, author, year_release, author_id});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {title, author, year_release, author_id} = req.query;
    const {error,data} = await poemController.update(id,{title, author, year_release, author_id});
    res.json({error,data});
}

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