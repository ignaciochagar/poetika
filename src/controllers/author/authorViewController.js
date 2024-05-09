import authorController from "./authorController.js";
import poemController from "../poem/poemController.js";

async function getAll(req,res){
    const {error,data} = await authorController.getAll();
    res.render("author/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const {error,data} = await authorController.getById(id)
    let poemArray = []
    let poemUnity = []
    for (let i = 0; data['poem'].length > i; i++) {
        if (data['poem'][i]['dataValues']['author_id'] == id) {
            poemUnity = [data['poem'][i]['dataValues']['title'], data['poem'][i]['dataValues']['year_release'], data['poem'][i]['dataValues']['poem_id']]
            poemArray.push(poemUnity);
        }
    }
    res.render("author/show",{error,author:data['author'], poemArray});
}

async function createForm(req,res){
    res.render("author/new");
}

async function create(req,res){
    const {name, born} = req.body;
    const {error,data} = await authorController.create({name, born});
    res.redirect("/author");
}

async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data}= await authorController.getById(id);
    res.render("author/update",{error,author:data['author']});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {name, born} = req.body;
    const {error,data} = await authorController.update(id,{name, born});
    res.redirect("/author");
}

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