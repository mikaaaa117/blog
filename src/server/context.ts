import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";
import { inferAsyncReturnType } from "@trpc/server";

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return { req, res, prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
