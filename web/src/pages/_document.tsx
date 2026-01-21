import Document, { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/r2-white.svg" />
          <div className="logo">
            <Image src="/r2-white.svg" alt="R2 Logo" width={90} height={90} />
          </div>
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
