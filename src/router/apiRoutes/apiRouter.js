import { Router } from "express";

import authorApiRouter from "./authorApiRouter.js";

const router = Router();


router.use("/author",authorApiRouter);


export default router;