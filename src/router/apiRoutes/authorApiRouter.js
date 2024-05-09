import { Router } from "express";

import authorApiController from "../../controllers/author/authorApiController.js";

const router = Router();


router.get("/",authorApiController.getAll);
router.get("/create",authorApiController.create);
router.get("/:id",authorApiController.getById);
router.get("/:id/update",authorApiController.update);
router.get("/:id/remove",authorApiController.remove);



export default router;

