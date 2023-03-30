import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store} children={undefined}>
      <main className={roboto.className}>
        <Component {...pageProps} />
        </main>
      </Provider>
    </QueryClientProvider>
  );
}
