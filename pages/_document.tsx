import Document, { Html, Head, Main, NextScript } from "next/document";
import { DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";

type Props = DocumentProps & {
  // add custom document props
};

const MyDocument: React.FC<Props> = (props) => {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default MyDocument;
