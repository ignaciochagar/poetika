import poemController from "./poemController.js";
import authorController from "../author/authorController.js";
async function getAll(req,res){
    const {error,data} = await poemController.getAll();
    res.render("poem/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await poemController.getById(id)
    res.render("poem/show",{error,poem:data});
}

async function createForm(req,res){
  const {error,data:authors} = await authorController.getAll();
    res.render("poem/new", {authors});
}

async function create(req,res){
    const {title, author, year_release, author_id} = req.body;
    const {error,data} = await poemController.create({title, author, year_release, author_id});
    res.redirect("/poem");
}

async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:poem}= await poemController.getById(id);
    res.render("poem/update",{error,poem});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {title, author, year_release, author_id} = req.body;
    const {error,data} = await poemController.update(id,{title, author, year_release, author_id});
    res.redirect("/poem");
}

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
    remove
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}
