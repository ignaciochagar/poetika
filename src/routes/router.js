import express from "express";
import { Router } from "express";

import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";

const app = express();
const router = Router();




router.use("/",viewRouter);
router.use("/api",apiRouter);






export default router;