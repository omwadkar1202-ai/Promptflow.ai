import { z } from "zod";

export const promptSchema = z.object({
  task: z.string().min(3),

  type: z
    .enum(["code", "logic", "video", "image", "ui"])
    .optional()
    .default("code"),

  level: z
    .enum(["basic", "improved"])
    .optional()
    .default("improved")
});