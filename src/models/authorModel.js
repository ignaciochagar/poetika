import connection from "../config/mysql.js";

async function findAll() {
    console.log("connection",connection)
    const queryString="SELECT * FROM author";
    const [rows,fields] = await connection.query(queryString);
    //console.log("find all");
    //console.log("rows",rows);
    //console.log("fields",fields);
    return rows;
}

async function findByPk(pk){
    const queryString="SELECT * FROM author WHERE author_id=?";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("find by pk");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows[0];
}

async function create(data){
    const queryString = "INSERT INTO author (name,born) VALUES (?,?)";
    const [rows,fields] = await connection.query(queryString,[data.name, data.born]);
    console.log("create");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}


async function update(pk,data){
    const queryString = "UPDATE author SET name=?, born=? WHERE author_id=?";
    const [rows,fields] = await connection.query(queryString,[data.name, data.born, pk]);
    console.log("update");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

async function remove(pk){
    const queryString="DELETE FROM author WHERE author_id=?";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("delete");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

export default {
    findAll,
    findByPk,
    create,
    update,
    remove
}

export {
    findAll,
    findByPk,
    create,
    update,
    remove
}

