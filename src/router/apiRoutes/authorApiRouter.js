import { Router } from "express";

import authorApiController from "../../controllers/author/authorApiController.js";
import authorViewController from "../../controllers/author/authorViewController.js";

const router = Router();


router.get("/",authorViewController.getAll);
router.get("/create",authorApiController.create);
router.get("/:id",authorApiController.getById);
router.get("/:id/update",authorApiController.update);
router.get("/:id/remove",authorApiController.remove);



export default router;

