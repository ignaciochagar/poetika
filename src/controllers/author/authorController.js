import authorModel from "../../models/authorModel.js";

async function getAll() {
    try {
        const author = await authorModel.findAll();
        return { data: artists };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const author = await authorModel.findByPk(id);
        if (!artist) {
            return { error: "El autor no existe" };
        }
        return { data: artist };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

async function create(authortData) {
    try {
        const newArtist = await authorModel.create(authorData);
        console.log("new author",newAuthor);
        return {data:newAuthor};
    } catch (error) {
        console.error(error);
        return {error}
    }


}

async function update(id, authorData) {
    try {
        const { born, name } = authorData;
        const author  = await authorModel.findByPk(id);
        if (!author) {
            return { error: "No se puede modificar un autor que no existe, txoripan!" };
        }
        if (born) {
            author.born = born;
        }
        if (name) {
            author.name = name;
        }
        const newAuthor = await authorModel.update(id,author);
        return {data:newAuthor};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const result = await authorModel.remove(id);
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