import express from "express";
import dotenv from "dotenv";

import { Router } from "express";

import { findAll } from "../models/authorModel.js";


dotenv.config();

const app = express();
const router = Router();




router.get("/", (req,res) => {
    res.render('./index.pug', {lista: findAll()});
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




export default router;