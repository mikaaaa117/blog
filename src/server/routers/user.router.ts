import { createUserSchema } from "@/schema/user.schema";
import { procedure, router } from "@/server/trpc";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";

export const userRouter = router({
  userRegister: procedure
    .input(createUserSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, name } = input;
      try {
        const user = await ctx.prisma.user.create({
          data: { email, name },
        });
        return user;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "User already exists",
            });
          }
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Sth went wrong",
        });
      }
    }),
  getUsers: procedure.query(async ({ ctx }) => {
    try {
      const users = await ctx.prisma.user.findMany();
      return users;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Cannot get users",
      });
    }
  }),
});
