import { Router } from "express";

import poemViewController from "../../controllers/poem/poemViewController.js";

const router = Router();


router.get("/",poemViewController.getAll);
router.get("/new",poemViewController.createForm);
router.post("/",poemViewController.create);
router.get("/:id",poemViewController.getById);
router.get("/:id/update",poemViewController.updateForm);
router.post("/:id",poemViewController.update);
router.post("/:id/remove",poemViewController.remove);
router.get("/letter/:letter",poemViewController.getByLetter);



export default router;

