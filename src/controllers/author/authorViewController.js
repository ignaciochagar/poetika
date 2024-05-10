import authorController from "./authorController.js";
import poemController from "../poem/poemController.js";

async function getAll(req,res){
    const {error,data} = await authorController.getAll();
    res.render("author/list",{error,data});
}

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
            authorUnity = [`${author.author_id} - ${author.name} (${author.born})`]
            authorArray.push(authorUnity)
        }        
    }
    console.log(authorArray);
    res.render('author/letter', {error,data:authorArray});
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