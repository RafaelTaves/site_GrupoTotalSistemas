import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <link rel="icon" href="./imagens/iconGTS.png" />
            <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Sora' rel='stylesheet'/>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <title>Grupo Total Sistemas</title>
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
