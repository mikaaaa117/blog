import { AppRouter } from "@/server/routers/app.router";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { getBaseUrl } from "@/utils/getBaseUrl";

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
                ...headers,
                "x-ssr": "1",
              };
            }
            return {};
          },
        }),
      ],
    };
  },
  ssr: true,
});
