import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store/store";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Image from 'next/image'
import logo from '../assets/logo.png'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <header>
      <>
      <Image src={ logo } alt="Ricky and morty's logo" width={200}/>
      <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
    </>
      </header>
      <Component {...pageProps} />
    </Provider>
  );
}
