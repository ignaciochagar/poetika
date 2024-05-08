import { Router } from "express";

import poemApiController from "../../controllers/poem/poemApiController.js";

const router = Router();


router.get("/",poemApiController.getAll);
router.get("/create",poemApiController.create);
router.get("/:id",poemApiController.getById);
router.get("/:id/update",poemApiController.update);
router.get("/:id/remove",poemApiController.remove);



export default router;

