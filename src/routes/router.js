import { Router } from "express";

import apiRouter from "./apiRouter.js";
import viewRouter from "./viewRouter.js";

const router = Router();



router.use("/api",apiRouter);
router.use("/",viewRouter);


export default router;