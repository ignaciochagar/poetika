import express from "express";
import dotenv from "dotenv";

import router from "./routes/router.js";

import router from "./router/router.js";

//import router from "./routes/router.js";

import connection from "./config/mysql.js";
import router from "./router/router.js";
import AuthorModel from "./models/authorModel.js";


dotenv.config();

const app = express();

app.use(express.static("public")); 

app.set("views","./src/views");
app.set("view engine","pug");

app.use(express.json()); // permite leer el body de llamadas POST y PUT tipo JSON
app.use(express.urlencoded({extended:true})); // permite leer el body de llamadas POST y PUT tipo URL Encoded



app.use("/",router);

app.get("/",async(req,res)=>{
    const rows = await AuthorModel.findAll();
    console.log("rows",rows);
    res.json(rows);
})

app.listen(3000,()=>{
    console.log("Servidor en marcha en el puerto "+process.env.APP_PORT);
})