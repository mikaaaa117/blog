import { prisma } from "@/utils/prisma";
import { inferAsyncReturnType } from "@trpc/server";
import jwt from "jsonwebtoken";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export function createContext({ req, res }: CreateNextContextOptions) {
  const getUser = () => {
    if (
      req.headers.authorization &&
      req.headers.authorization !== "undefined"
    ) {
      const token = req.headers.authorization.split(" ")[1];

      console.log(token);
      if (token === "undefined") return null;

      const user = jwt.verify(token, "supersecret");
      console.log(user);

      return user;
    }
    return null;
  };

  const user = getUser();

  return { req, res, prisma, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
