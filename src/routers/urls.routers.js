import { Router } from "express";

import { postShorten, getShorten, getShortenOpen, deleteShorten } from "../controllers/urls.controllers.js";
import { authorization } from "../middleware/authorization.middleware.js";

const router = Router();

router.post("/urls/shorten", authorization, postShorten);
router.get("/urls/:id", getShorten);
router.get("/urls/open/:shortUrl", getShortenOpen);
router.delete("/urls/:id", authorization, deleteShorten)

export default router;