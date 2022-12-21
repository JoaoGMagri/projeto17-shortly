import { Router } from "express";

import { postShorten } from "../controllers/urls.controllers.js";
import { authorization } from "../middleware/authorization.middleware.js";

const router = Router();

router.post("/urls/shorten", authorization, postShorten);

export default router;