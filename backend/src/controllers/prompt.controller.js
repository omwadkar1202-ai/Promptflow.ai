import { callLLM } from "../services/llm.service.js";
import { generatePrompt } from "../services/prompt.service.js";
import { promptSchema } from "../validators/prompt.schema.js";
import { logger } from "../utils/logger.js";

export const createPrompt = async (req, res) => {
  try {
    // 🔍 Log request
    logger.info({ body: req.body }, "Incoming request");

    // ✅ Validate input
    const parsed = promptSchema.safeParse(req.body);

    if (!parsed.success) {
      logger.warn(parsed.error, "Validation failed");

      return res.status(400).json({
        error: parsed.error.errors[0].message
      });
    }

    const { task, type = "general", level = "improved" } = parsed.data;

    // 🧠 Generate prompts
    const { initialPrompt, improvedPrompt, improvement } =
      generatePrompt({ task, type, level });

    // 🎯 Decide which prompt to send to LLM
    const finalPrompt =
      level === "basic" ? initialPrompt : improvedPrompt;

    // 🤖 Call LLM
    const response = await callLLM(finalPrompt);

    logger.info("LLM response generated");

    // 📦 Send everything for frontend comparison
    res.json({
      initialPrompt,
      improvedPrompt,
      improvement,
      response
    });

  } catch (error) {
    logger.error(error, "Controller Error");

    res.status(500).json({
      error: "Something went wrong"
    });
  }
};