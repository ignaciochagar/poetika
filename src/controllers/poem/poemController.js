
import poemModel from "../../models/poemModel.js";

async function getAll() {
    try {
        const poems = await poemModel.findAll();
        return { data: poems };
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
        console.log("new poem", newPoem);
        return { data: newPoem };
    } catch (error) {
        console.error(error);
        return { error }
    }
}

async function update(id, poemData) {
    try {
        const { title, author, year_release } = poemData;
        const poem = await poemModel.findByPk(id);
        if (!poem) {
            return { error: "No se puede modificar un poema que no existe, dartacan!" };
        }
        if (title) {
            poem.title = title;
        }
        if (author) {
            poem.author = author
        }
        if (year_release) {
            poem.year_release = year_release;
        }
        const newPoem = await poemModel.update(id, poem);
        return { data: newPoem };
    } catch (error) {
        console.error(error);
        return { error }
    }

}

async function remove(id) {
    try {
        const result = await poemModel.remove(id);
        return { data: result };
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
