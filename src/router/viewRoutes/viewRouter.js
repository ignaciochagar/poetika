import { Router } from "express";

import authorViewRouter from "./authorViewRouter.js";
import poemViewRouter from "./poemViewRouter.js";

const router = Router();


router.use("/author",authorViewRouter);
router.use("/poem",poemViewRouter);

export default router;