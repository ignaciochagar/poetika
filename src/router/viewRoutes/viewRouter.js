import { Router } from "express";

import authorViewRouter from "./authorViewRouter.js";
import poemViewRouter from "./poemViewRouter.js";
import userViewRouter from "./userViewRouter.js";

const router = Router();


router.use("/author",authorViewRouter);
router.use("/poem",poemViewRouter);
router.use("/",userViewRouter);

export default router;