export const generatePrompt = ({ task, type, level }) => {
  const base = `
TASK:
${task}
`;

  // IMAGE (your existing one)
  if (type === "image") {
    return {
      initialPrompt: `Create an image for: ${task}`,

      improvedPrompt: `
You are an expert AI image prompt engineer.

TASK:
${task}

Generate a high-quality image generation prompt.

Include:
- Subject clarity
- Environment / background
- Lighting and mood
- Style (cinematic, realistic, etc.)
- Camera details (optional)
- Quality tags (4K, ultra-detailed)

OUTPUT:
Only return ONE final prompt. No steps.
`,

      improvement: `
- Converted vague request into structured visual prompt
- Added artistic direction (lighting, style, mood)
- Made it usable for AI image tools
`
    };
  }

  // CODE
  if (type === "code") {
    return {
      initialPrompt: `Write code for: ${task}`,

      improvedPrompt: `
You are a senior software engineer.

TASK:
${task}

INSTRUCTIONS:
- Write clean, production-ready code
- Use best practices and proper structure
- Add meaningful variable names
- Include comments where necessary
- Handle edge cases
- Optimize for performance and readability

OUTPUT:
- Only return code
- No explanation unless necessary
`,

      improvement: `
- Added engineering best practices
- Improved code readability and structure
- Included edge case handling
- Made output production-ready
`
    };
  }

  // LOGIC / THINKING
  if (type === "logic") {
    return {
      initialPrompt: `Solve this problem: ${task}`,

      improvedPrompt: `
You are an expert problem solver.

TASK:
${task}

INSTRUCTIONS:
- Break the problem into steps
- Show clear logical reasoning
- Consider edge cases
- Avoid assumptions without explanation
- Keep reasoning structured and easy to follow

OUTPUT:
- Step-by-step solution
- Final answer clearly stated
`,

      improvement: `
- Added structured reasoning steps
- Improved clarity of thinking process
- Reduced ambiguity
- Ensured logical flow
`
    };
  }

  // VIDEO / REEL
  if (type === "video" || type === "reel") {
    return {
      initialPrompt: `Create a video idea for: ${task}`,

      improvedPrompt: `
You are a viral content creator.

TASK:
${task}

Create a short-form video / reel concept.

INCLUDE:
- Hook (first 3 seconds)
- Main content flow
- Scene breakdown
- Voiceover/dialogue
- Visual style
- Call-to-action

STYLE:
- Engaging
- Fast-paced
- Optimized for social media (Instagram Reels / TikTok)

OUTPUT:
- Ready-to-shoot script
`,

      improvement: `
- Added hook and retention strategy
- Structured video flow
- Made content platform-optimized
- Improved engagement potential
`
    };
  }

  // UI / WEBSITE
  if (type === "ui" || type === "website") {
    return {
      initialPrompt: `Design a UI for: ${task}`,

      improvedPrompt: `
You are a senior UI/UX designer.

TASK:
${task}

INSTRUCTIONS:
- Define layout structure
- Describe key sections (header, hero, features, etc.)
- Ensure user-friendly navigation
- Focus on modern design principles
- Consider responsiveness (mobile + desktop)
- Include color scheme and typography suggestions

OUTPUT:
- Clear UI structure
- Section-wise breakdown
- Practical and developer-friendly
`,

      improvement: `
- Added UX structure and hierarchy
- Improved usability and clarity
- Included design system thinking
- Made it implementation-ready
`
    };
  }

  // DEFAULT (fallback)
  return {
    initialPrompt: `
You are an AI.

Solve this:
${task}
`,

    improvedPrompt: `
You are an expert AI system.

TASK:
${task}

INSTRUCTIONS:
- Be clear and structured
- Provide actionable output
- Optimize for clarity and usefulness

OUTPUT:
- Clean and well-organized answer
`,

    improvement: `
- Added structure
- Improved clarity
- Defined output expectations
`
  };
};