import connection from "../config/mysql.js";

async function findAll() {
    console.log("connection", connection);
    const queryString = "SELECT * FROM author";
    const [rows, fields] = await connection.query(queryString);
    console.log("find all");
    console.log("rows", rows);
    console.log("fields", fields);
    return rows;
}

async function findByPk(pk) {
    const queryString = "SELECT * FROM author WHERE author_id=?";
    const [rows, fields] = await connection.query(queryString, [pk]);
    console.log("find by pk");
    console.log("rows", rows);
    console.log("fields", fields);
    return rows[0];
}

async function create(data) {
    const isAlive = data.is_alive === 'on' ? 1 : 0;
    const queryString = "INSERT INTO author (name, Born_Year) VALUES (?,?,?)";
    const [rows, fields] = await connection.query(queryString, [data.name, data.Born_Year]);
    console.log("create");
    console.log("rows", rows);
    console.log("fields", fields);
    return rows;
}

async function update(pk, data) {
    const isAlive = data.is_alive === 'on' ? 1 : 0;
    const queryString = "UPDATE author SET name=?, Born_Year=? WHERE author_id=?";
    const [rows, fields] = await connection.query(queryString, [data.name, data.Born_Year, pk]);
    console.log("update");
    console.log("rows", rows);
    console.log("fields", fields);
    return rows;
}

async function remove(pk) {
    const queryString = "DELETE FROM author WHERE author_id=?";
    const [rows, fields] = await connection.query(queryString, [pk]);
    console.log("delete");
    console.log("rows", rows);
    console.log("fields", fields);
    return rows;
}

export default {
    findAll,
    findByPk,
    create,
    update,
    remove
};

