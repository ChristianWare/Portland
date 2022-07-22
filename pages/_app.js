import "../styles/globals.css";
import Head from "next/dist/shared/lib/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes'
    />
  </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
