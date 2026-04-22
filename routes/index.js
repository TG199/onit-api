/**
 * Express router for handling routes.
 * @module routes/index
 */

import express from "express";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import adminRoutes from "./admin.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/api/user", userRoutes);
router.use("/api/admin", adminRoutes);

export default router;
