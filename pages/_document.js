import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-web bg-center bg-no-repeat bg-cover bg-fixed ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
