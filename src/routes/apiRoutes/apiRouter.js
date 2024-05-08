import { Router } from "express";

import poemApiRouter from "./poemApiRouter.js";

const router = Router();


router.use("/poem",poemApiRouter);


export default router;