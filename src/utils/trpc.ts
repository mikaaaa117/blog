import { AppRouter } from "@/server/routers/app.router";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { getBaseUrl } from "@/utils/getBaseUrl";

let token: string;

export const setToken = (accessToken: string) => {
  token = accessToken;
};

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            if (ctx?.req) {
              const { connection: _connection, ...headers } = ctx.req.headers;

              return {
                Authorization: `Bearer ${token}`,
                ...headers,
                "x-ssr": "1",
              };
            }
            return {
              Authorization: `Bearer ${token}`,
            };
          },
        }),
      ],
    };
  },
  ssr: true,
});
