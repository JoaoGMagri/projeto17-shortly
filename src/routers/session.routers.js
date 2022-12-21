import { Router } from "express";

import { postSingUp, postSingIn } from "../controllers/session.controllers.js"
import { singUpMD } from "../middleware/singUp.middleware.js";
import { singInMD } from "../middleware/singIn.middleware.js";

const router = Router();

router.post("/sing-up", singUpMD, postSingUp);
router.post("/sing-in", singInMD, postSingIn);

export default router;