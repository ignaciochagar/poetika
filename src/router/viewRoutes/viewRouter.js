import { Router } from "express";

import authorViewRouter from "./authorViewRouter.js";

const router = Router();


router.use("/author",authorViewRouter);

export default router;