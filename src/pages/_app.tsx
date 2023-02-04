import { Layout } from "@/components/Layout/Layout";
import { trpc } from "@/utils/trpc";
import type { AppProps, AppType } from "next/app";

import "@/pages/reset.css";

const App: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default trpc.withTRPC(App);
