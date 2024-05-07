import { Router } from "express";

import authorViewRouter from "./authorViewRouter.js";

const router = Router();


router.use("/auhor",authorViewRouter);

export default router;