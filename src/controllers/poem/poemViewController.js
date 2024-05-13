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
    res.render('poem/letter', {error,data:poemArray});
}

async function createForm(req,res){
    const {error,data} = await authorController.getAll();
    res.render("poem/new", {authors:data});
}

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
