const poems = [
	{
		"poem_id" : 1,
		"title" : "Oda al viento",
		"author" : "Pablo Neruda",
		"year_release" : null
	},
	{
		"poem_id" : 2,
		"title" : "La divina comedia",
		"author" : "Dante Alighieri",
		"year_release" : null
	},
	{
		"poem_id" : 3,
		"title" : "Cien sonetos de amor",
		"author" : "Pablo Neruda",
		"year_release" : null
	}
];

async function getAll(){
    return {data: poems};
}

async function getById(id){
    const poem = poems.find(poem => poem.poem_id === id);
    if(!poem){
        return {error: "El poema no existe"};
    }
    return {data: poem};
}

async function create(poemData){
    const {title, author, year_release} = poemData;
    if(!title || !author){
        return {error: "Los poemas deben tener título y autor"};
    }
    const maxId = Math.max(...poems.map(poem => poem.poem_id));
    const newId = maxId + 1;
    const newPoem = {
        poem_id: newId,
        title,
        author,
        year_release
    };
    poems.push(newPoem);
    return {data: newPoem};
}

async function update(id, poemData){
    const {title, author, year_release} = poemData;
    const poem = poems.find(poem => poem.poem_id === id);
    if(!poem){
        return {error: "No se puede modificar un poema que no existe"};
    }
    if(title){
        poem.title = title;
    }
    if(author){
        poem.author = author;
    }
    if(year_release){
        poem.year_release = year_release;
    }
    return {data: poem};
}

async function remove(id){
    const poemIndex = poems.findIndex(poem => poem.poem_id === id);
    if(poemIndex === -1){
        return {error: "No se pueden borrar poemas que no existen"};
    }
    const deletedPoem = poems.splice(poemIndex, 1);
    return {data: deletedPoem};
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
