import connection from "../config/mysql.js";

async function findAll() {
    console.log("connection",connection)
    const queryString="SELECT * FROM poem";
    const [rows,fields] =await connection.query(queryString);
    console.log("find all");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

async function findByPk(pk){
    const queryString="SELECT * FROM poem WHERE poem_id=?";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("find by pk");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows[0];
}

async function create(data){
    const queryString = "INSERT INTO poem (title,author,year_release) VALUES (?,?,?)";
    const [rows,fields] = await connection.query(queryString,[data.title,data.author,data.year_release]);
    console.log("create");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}


async function update(pk,data){
    const queryString = "UPDATE poem SET title=?, author=?, year_release=? WHERE poem_id=?";
    const [rows,fields] = await connection.query(queryString,[data.title,data.author,data.year_release,pk]);
    console.log("update");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

async function remove(pk){
    const queryString="DELETE FROM artist WHERE poem_id=?";
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

