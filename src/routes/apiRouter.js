import { Router } from "express";

import authorApiRouter from "./authorApiroute.js";

const router = Router();


router.use("/author",authorApiRouter);


export default router;