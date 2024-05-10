import { Router } from "express";

import authorViewController from "../../controllers/author/authorViewController.js";
import { hasSession } from "../../middlewares/authMiddleware.js";

const router = Router();


router.get("/",authorViewController.getAll);
router.get("/new",hasSession,authorViewController.createForm);
router.post("/",hasSession,authorViewController.create);
router.get("/:id",authorViewController.getById);
router.get("/:id/update",hasSession,authorViewController.updateForm);
router.post("/:id",hasSession,authorViewController.update);
router.post("/:id/remove",hasSession,authorViewController.remove);
router.get("/letter/:letter",authorViewController.getByLetter);




export default router;

