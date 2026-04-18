export const createPrompt = async (req, res) => {
  try {
    console.log("REQUEST BODY:", req.body);

    const { task } = req.body;

    const prompt = promptService.generatePrompt(task);
    console.log("PROMPT:", prompt);

    const response = await llmService.callLLM(prompt);
    console.log("LLM RESPONSE:", response);

    res.json({
      prompt,
      response
    });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};