import Layout from "@/components/Layout";
import Head from "next/head";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import store from "@/redux/store";
import { Provider } from "react-redux";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import { Seo } from "../components/Seo";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Seo
        title="Property Shop - Your Destination for Real Estate | Bit Software Solutions Ltd."
        description="Browse our selection of luxurious villas, cozy apartments, and more. Find your dream property with Property Shop today."
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};
export default appWithTranslation(MyApp /*, nextI18NextConfig */);
