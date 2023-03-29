import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store/store";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store} children={undefined}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
