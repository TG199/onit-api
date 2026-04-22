import express from "express";
import { register, login, logout, adminRegister } from "../controllers/AuthController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);
router.post("/admin/register", adminRegister);

export default router;
