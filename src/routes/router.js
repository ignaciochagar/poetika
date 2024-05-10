import { Router } from "express";

import apiRouter from "./apiRouter.js";
import viewRouter from "./viewRouter.js";

//import bandController from "../controllers/band/bandController.js";
import poemController from "../controllers/poem/poemController.js";
const router = Router();


router.get("/",async (req,res)=>{
    //const bands = await bandController.getAll();
    const poems = await poemController.getAll();
    res.json({poems});
})
router.use("/api",apiRouter);
router.use("/",viewRouter);


export default router;