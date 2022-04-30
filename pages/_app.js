import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Carlos Castro - Portfolio</title>
      </Head>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
