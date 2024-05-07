//import express from "express";
import { Router } from "express";

import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";

const router = Router();


router.use("/api",apiRouter);
router.use("/",viewRouter);



/* router.get("/", (req,res) => {
    res.render('./index.pug');
});


router.get("/session", (req,res) => {
    res.render('./session.pug');
});


router.get("/find", (req,res) => {
    res.render('./find.pug');
});


router.get("/new_user", (req,res) => {
    res.render('./newUser.pug');
});
 */



export default router;