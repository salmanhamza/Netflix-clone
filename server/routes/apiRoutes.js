// backend/routes/apiRoutes.mjs
import express from "express";
import { createUser, login } from "../controllers/userController.js";

const router = express.Router();

// Route for creating a new user
router.post("/add", createUser);
router.post("/authenticate", login);

export default router;
