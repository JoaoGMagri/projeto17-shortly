import { Router } from "express";

import { getUsersMe, getRanking } from "../controllers/users.controllers.js";
import { authorization } from "../middleware/authorization.middleware.js";

const router = Router();

router.get("/users/me", authorization, getUsersMe);
router.get("/ranking", getRanking);

export default router;