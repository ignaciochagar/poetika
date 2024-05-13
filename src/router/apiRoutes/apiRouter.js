import { Router } from "express";

import authorApiRouter from "./authorApiRouter.js";
import poemApiRouter from "./poemApiRouter.js";
// import userApiRouter from "./userApiRouter.js";

const router = Router();


router.use("/author",authorApiRouter);
router.use("/poem",poemApiRouter);
// router.use("/",userApiRouter);



export default router;