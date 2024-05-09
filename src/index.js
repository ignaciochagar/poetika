import express from "express";
import dotenv from "dotenv";
<<<<<<< HEAD
import router from "./routes/router.js";
=======

import router from "./router/router.js";

//import router from "./routes/router.js";
>>>>>>> ivan

dotenv.config();

const app = express();

app.use(express.static("public")); // permite mostrar archivos en la carpeta public

app.set("views","./src/views");
app.set("view engine","pug");

app.use(express.json()); // permite leer el body de llamadas POST y PUT tipo JSON
app.use(express.urlencoded({extended:true})); // permite leer el body de llamadas POST y PUT tipo URL Encoded


<<<<<<< HEAD
app.use("/",router);
=======

app.use("/", router);
app.use("/session", router);
app.use("/find", router);
app.use("/new_user", router);


>>>>>>> ivan

app.listen(3000,()=>{
    console.log("Servidor en marcha en el puerto "+process.env.APP_PORT);
})