import { Router } from "express";

import authorApiRouter from "./authorApiRouter.js";
import poemApiRouter from "./poemApiRouter.js";

const router = Router();


router.use("/author",authorApiRouter);
router.use("/poem",poemApiRouter);


export default router;