import poemModel from "../../models/poemModel.js";

async function getAll() {
    try {
        const poem = await poemModel.findAll();
        return { data: poem };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const poem = await poemModel.findByPk(id);
        if (!poem) {
            return { error: "El poema no existe" };
        }
        return { data: poem };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

async function create(poemData) {
    try {
        const newPoem = await poemModel.create(poemData);
        console.log("new poem",newPoem);
        return {data:newPoem};
    } catch (error) {
        console.error(error);
        return {error}
    }


}

async function update(id, poemData) {
    try {
        const { title, author, year_release, author_id} = poemData;
        const poem  = await poemModel.findByPk(id);
        if (!poem) {
            return { error: "No se puede modificar un autor que no existe, txoripan!" };
        }
        if (title) {
            poem.title = title;
        }
        if (author) {
            poem.author = author;
        }
        if (year_release) {
            poem.year_release = year_release;
        }
        if (author_id) {
            poem.author_id = author_id;
        }
        const newPoem = await poemModel.update(id,poem);
        return {data:newPoem};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const result = await poemModel.remove(id);
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
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