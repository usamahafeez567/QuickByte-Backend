import { Router } from "express";
import { signUp,signIn } from "../controllers/userAuth.js";

const router=Router();

router.post("/api/register", signUp)
router.post("/signin",signIn)

export default router;