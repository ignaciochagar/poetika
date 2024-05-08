import { Router } from "express";

import poemApiController from "../../controllers/poem/poemApiController.js";

const router = Router();


router.get("/",poemApiController.getAll);
//router.post("/",poemApiController.create);
router.get("/create",poemApiController.create);
router.get("/:id",poemApiController.getById);
//router.put("/:id",poemApiController.update);
router.get("/:id/update",poemApiController.update);
//router.delete("/:id",poemApiController.remove);
router.get("/:id/remove",poemApiController.remove);



export default router;

