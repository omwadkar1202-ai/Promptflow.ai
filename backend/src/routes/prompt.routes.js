import express from "express";
import { createPrompt } from "../controllers/prompt.controller.js";

const router = express.Router();

router.post("/", createPrompt);

export default router;