
const authors = [
    {
        "ID_Author": 1,
        "Name": "Gabriel Aresti",
        "Born_Year": 1933
    },
    {
        "ID_Author": 2,
        "Name": "Joseba Sarrionandia",
        "Born_Year": 1958
    },
    {
        "ID_Author": 3,
        "Name": "Lauaxeta",
        "Born_Year": 1876
    },
    {
        "ID_Author": 4,
        "Name": "Bernardo Atxaga",
        "Born_Year": 1951
    },
    {
        "ID_Author": 5,
        "Name": "Joxe Azurmendi",
        "Born_Year": 1941
    },
    {
        "ID_Author": 6,
        "Name": "Maite Zaitut",
        "Born_Year": 1965
    },
    {
        "ID_Author": 7,
        "Name": "Itziar Ariztimuño",
        "Born_Year": 1970
    },
    {
        "ID_Author": 8,
        "Name": "Leire Bilbao",
        "Born_Year": 1982
    },
    {
        "ID_Author": 9,
        "Name": "Irati Miren",
        "Born_Year": 1990
    },
    {
        "ID_Author": 10,
        "Name": "Nerea Etxebarria",
        "Born_Year": 1985
    }
];

async function getAllAuthors(){
    return { data: authors };
}

async function getAuthorById(id){
    const author = authors.find(author => author.ID_Author === id);
    if(!author){
        return { error: "El autor no existe" };
    }
    return { data: author };
}

async function createAuthor(authorData){
    const { Name, Born_Year } = authorData;
    // Obtener el máximo ID_Author de los autores
    if(!Name){
        return { error: "Los autores deben tener nombre!" };
    }
    const maxId = Math.max(...authors.map(author => author.ID_Author));
    const newId = maxId + 1;
    const newAuthor = {
        ID_Author: newId,
        Name,
        Born_Year
    };
    authors.push(newAuthor);
    return { data: newAuthor };
}

async function updateAuthor(id, authorData){
    const { Name, Born_Year } = authorData;
    const author = authors.find(author => author.ID_Author === id);
    if(!author){
        return { error: "No se puede modificar un autor que no existe" };
    }
    if(Name){
        author.Name = Name;
    }
    if(Born_Year){
        author.Born_Year = Born_Year;
    }
    return { data: author };
}

async function removeAuthor(id){
    const authorIndex = authors.findIndex(author => author.ID_Author === id);
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
