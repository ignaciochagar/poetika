import poemController from "./poemController.js";
import authorController from "../author/authorController.js"
import authorModel from "../../models/authorModel.js";

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
    const {error,data} = await authorController.getAll();
    res.render("poem/new", {authors:data});
}

async function create(req,res){
    const {title, year_release, author_id} = req.body;

    const name = await authorModel.findByPk(author_id);
    let author = name.name;

    const {error,data} = await poemController.create({title, author, year_release, author_id});
    console.log(`esto son datos ${data}`)
    console.log(`esto son errores ${error}`);
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
