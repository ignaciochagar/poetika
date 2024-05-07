import { Router } from "express";

import poemViewRouter from "./poemViewRouter.js";

const router = Router();


router.use("/poem",poemViewRouter);

export default router;