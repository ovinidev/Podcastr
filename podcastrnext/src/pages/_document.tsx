import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

// Utilizando classe por ser obrigatório
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
        </Head>
              <body>
                <Main />
                <NextScript />
              </body>
      </Html>
    );
  }
}
