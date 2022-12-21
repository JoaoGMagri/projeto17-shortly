import { Router } from "express";

import { getUsersMe } from "../controllers/users.controllers.js";
import { authorization } from "../middleware/authorization.middleware.js";

const router = Router();

router.get("/users/me", authorization, getUsersMe);
/* router.get("/urls/:id", getShorten); */

export default router;