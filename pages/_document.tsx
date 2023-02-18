import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="简单输入内容就能生成文案的工具."
          />
          <meta property="og:site_name" content="小紅書運營助手" />
          <meta
            property="og:description"
            content="小红书风格的文案原来如此简单"
          />
          <meta property="og:title" content="小紅書運營助手" />
          <meta name="twitter:card" content="Little Red Book Paperwork" />
          <meta name="twitter:title" content="Little Red Book Paperwork" />
          <meta
            name="twitter:description"
            content="Simplify your chat content in seconds."
          />
          <meta
            property="og:image"
            content="https://xhsai.vercel.app/icon1.png"
          />
          <meta
            name="twitter:image"
            content="https://xhsai.vercel.app/icon1.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
