import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

export const createUserOutputSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
