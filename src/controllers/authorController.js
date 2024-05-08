import authorModel from "../models/authorModel.js";


async function getAllAuthors(){ 
    try {
        const authors = await authorModel.findAll();
        return { data: authors };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getAuthorById(id){
    const author = authors.find(author => author.author_id === id);
    if(!author){
        return { error: "El autor no existe" };
    }
    return { data: author };
}

async function createAuthor(authorData){
    const { Name, Born } = authorData;
    // Obtener el máximo ID_Author de los autores
    if(!Name){
        return { error: "Los autores deben tener nombre!" };
    }
    const maxId = Math.max(...authors.map(author => author.author_id));
    const newId = maxId + 1;
    const newAuthor = {
        author_id: newId,
        Name,
        Born
    };
    authors.push(newAuthor);
    return { data: newAuthor };
}

async function updateAuthor(id, authorData){
    const { Name, Born } = authorData;
    const author = authors.find(author => author.author_id === id);
    if(!author){
        return { error: "No se puede modificar un autor que no existe" };
    }
    if(Name){
        author.Name = Name;
    }
    if(Born){
        author.Born = Born;
    }
    return { data: author };
}

async function removeAuthor(id){
    const authorIndex = authors.findIndex(author => author.author_id === id);
    if(authorIndex === -1){
        return { error: "No se pueden borrar autores que no existen" };
    }
    const deletedAuthor = authors.splice(authorIndex, 1);
    return { data: deletedAuthor };
}

export {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    removeAuthor
};

export default {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    removeAuthor
};
