import { createUserSchema, loginUserSchema } from "@/schema/user.schema";
import { procedure, router } from "@/server/trpc";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";

export const userRouter = router({
  userRegister: procedure
    .input(createUserSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, name, password } = input;
      try {
        const data = { email: email, name: name, password: password };
        const user = await ctx.prisma.user.create({
          data: data,
        });

        const token = jwt.sign(
          { id: user.id, email: user.email, name: user.name },
          "supersecret"
        );

        ctx.res.setHeader("access-token", token);

        return { accessToken: token };
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
  userLogin: procedure
    .input(loginUserSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;
      try {
        const user = await ctx.prisma.user.findUnique({
          where: { email: email },
        });
        if (!user || user.password !== password)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Incorrect email or password",
          });

        const token = jwt.sign(
          { id: user.id, email: user.email, name: user.name },
          "supersecret"
        );

        return { accessToken: token };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Cannot login now",
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
