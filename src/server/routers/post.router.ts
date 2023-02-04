import { TRPCError } from "@trpc/server";
import { procedure, router } from "../trpc";

export const postRouter = router({
  getPosts: procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You're not authed",
      });
    }

    const posts = await ctx.prisma.post.findMany();

    return posts;
  }),
});
