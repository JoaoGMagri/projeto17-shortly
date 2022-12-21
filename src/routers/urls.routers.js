import { Router } from "express";

import { postShorten, getShorten } from "../controllers/urls.controllers.js";
import { authorization } from "../middleware/authorization.middleware.js";

const router = Router();

router.post("/urls/shorten", authorization, postShorten);
router.get("/urls/:id", getShorten);

export default router;