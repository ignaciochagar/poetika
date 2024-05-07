import { Router } from "express";

import authorViewController from "../../controllers/author/authorViewController.js";

const router = Router();


router.get("/",authorViewController.getAll);
router.get("/new",authorViewController.createForm);
router.post("/",authorViewController.create);
router.get("/:id",authorViewController.getById);
router.get("/:id/update",authorViewController.updateForm);
router.post("/:id",authorViewController.update);
router.post("/:id/remove",authorViewController.remove);



export default router;

