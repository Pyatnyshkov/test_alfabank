import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.merchants);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
