import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z
    .string()
    .min(6, "Your password less than 6 character")
    .max(20, "Your password is greeter than 20 character"),
});

export const userOutputSchema = z.object({
  token: z.string(),
});

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Your password less than 6 character")
    .max(20, "Your password is greeter than 20 character"),
});

export type LoginUserSchema = z.TypeOf<typeof loginUserSchema>;
export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
