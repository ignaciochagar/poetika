import authorController from "./authorController.js";

async function getAll(req,res){
    const {error,data} = await authorController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await authorController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    const {name, born} = req.query;
    const {error,data} = await authorController.create({name, born});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {name, born} = req.query;
    const {error,data} = await authorController.update(id,{name, born});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await authorcontroller.remove(id);
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